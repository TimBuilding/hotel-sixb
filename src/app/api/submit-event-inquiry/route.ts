import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import eventInquirySchema from "@/lib/event-inquiry-schema";
import { createClient } from "@supabase/supabase-js";

import { NextRequest, NextResponse } from "next/server";
import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";

export const POST = async (req: NextRequest) => {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const { hcaptchaToken, ...data } = (await req.json()) as z.infer<
    typeof eventInquirySchema
  > & { hcaptchaToken: string };

  // validate hcaptcha
  const hcaptchaResponse = hcaptchaToken;
  const secret = process.env.HCAPTCHA_SECRET;

  const verifyResponse = await fetch(`https://hcaptcha.com/siteverify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `response=${hcaptchaResponse}&secret=${secret}`,
  });

  const verificationResult = await verifyResponse.json();

  if (!verificationResult.success) {
    return NextResponse.json(
      { error: "hCaptcha verification failed" },
      { status: 400 }
    );
  }

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabase.from("event_inquiries").insert([
      {
        event_start: data.eventStart,
        event_end: data.eventEnd,
        number_of_guest: data.numberOfGuest,
        event_type: data.eventType,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
    ]);

    if (error) {
      throw error;
    }

    // send email notification to admin
    const mailersend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_TOKEN || "",
    });

    const sender = new Sender(
      process.env.MAILERSEND_SENDER_EMAIL_ADDRESS || "",
      "Hotel SixB"
    );
    const recipient = new Recipient(
      process.env.MAILERSEND_RECEIPIENT_EMAIL_ADDRESS || ""
    );

    const emailParams = new EmailParams()
      .setFrom(sender)
      .setTo([recipient])
      .setSubject("New event inquiry").setText(`New event inquiry details:
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Event Start: ${data.eventStart}
        Event End: ${data.eventEnd}
        Number of Guests: ${data.numberOfGuest}
        Event Type: ${data.eventType}
        Message: ${data.message}`);

    await mailersend.email.send(emailParams);

    return NextResponse.json(
      { message: "Event inquiry submitted successfully", data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while submitting the event inquiry" },
      { status: 500 }
    );
  }
};

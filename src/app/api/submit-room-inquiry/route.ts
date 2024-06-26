import roomInquirySchema from "@/lib/room-inquiry-schema";
import { z } from "zod";
import { TablesInsert } from "../../../../types/database.types";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const POST = async (req: Request) => {
  const { hcaptchaToken, ...data } = (await req.json()) as z.infer<
    typeof roomInquirySchema
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

  const insertData: TablesInsert<"room_inquiries"> = {
    adults: data.adults,
    check_in_date: new Date(data.checkInDate).toISOString(),
    check_out_date: new Date(data.checkOutDate).toISOString(),
    children: data.children,
    email: data.email,
    name: data.name,
    phone: data.phone,
    message: data.message,
    room_type: data.roomType,
    number_of_rooms: data.numberOfRooms,
  };

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );

  const { error } = await supabase.from("room_inquiries").insert(insertData);

  if (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "Failed to insert room inquiry" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Room inquiry submitted successfully" },
    { status: 200 }
  );
};

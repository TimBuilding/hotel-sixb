import { z } from "zod";

const eventInquirySchema = z.object({
  eventStart: z.date(),
  eventEnd: z.date(),
  numberOfGuest: z.preprocess(
    (val) => parseInt(val as string, 10),
    z.number().min(1)
  ),
  eventType: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(1),
});

export default eventInquirySchema;

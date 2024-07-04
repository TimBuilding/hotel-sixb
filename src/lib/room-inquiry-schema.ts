import { z } from "zod";

const roomInquirySchema = z
  .object({
    checkInDate: z.date(),
    checkOutDate: z.date(),
    adults: z.preprocess(
      (val) => parseInt(val as string, 10),
      z.number().min(1)
    ),
    children: z.preprocess(
      (val) => parseInt(val as string, 10),
      z.number().min(0)
    ),
    roomType: z.string().min(1),
    numberOfRooms: z.preprocess(
      (val) => parseInt(val as string, 10),
      z.number().min(1)
    ),
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(10),
    message: z.string().min(1),
  })
  .superRefine((data, ctx) => {
    if (data.checkInDate >= data.checkOutDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Check-in date must be before check-out date",
      });
    }
  });

export default roomInquirySchema;

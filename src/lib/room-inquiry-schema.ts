import { z } from "zod"

const roomInquirySchema = z.object({
  checkInDate: z.date(),
  checkOutDate: z.date(),
  adults: z.number().min(1),
  children: z.number().min(0),
  roomType: z.string().min(1),
  numberOfRooms: z.number().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(1),
})

export default roomInquirySchema;


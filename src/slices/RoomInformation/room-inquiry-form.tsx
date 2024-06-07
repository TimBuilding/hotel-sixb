"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import roomInquirySchema from "@/lib/room-inquiry-schema";
import { cn } from "@/lib/utils";
import getRooms from "@/queries/get-rooms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const RoomInquiryForm = () => {
  const form = useForm<z.infer<typeof roomInquirySchema>>({
    resolver: zodResolver(roomInquirySchema),
    defaultValues: {
      checkInDate: new Date(),
      checkOutDate: new Date(Date.now() + 86400000), // 86400000 milliseconds = 1 day
      adults: 1,
      children: 0,
      roomType: "",
      numberOfRooms: 1,
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { data: rooms } = useQuery({ queryKey: ["rooms"], queryFn: getRooms });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="checkInDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black text-sm font-medium">
                Check In Date
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>mm / dd / yy</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="checkInDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-black text-sm font-medium">
                Check Out Date
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>mm / dd / yy</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name={"adults"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adults</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Adults" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name={"children"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kids</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Adults" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name={"adults"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adults</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Adults" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="roomType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Room Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {rooms?.map((room) => (
                    <SelectItem
                      key={room.id}
                      value={room.data.title?.toString() || ""}
                    >
                      {room.data.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name={"numberOfRooms"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Room</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Number of Room" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="bg-[#C0B37B]" />
        <FormField
          name={"name"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name={"numberOfRooms"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name={"numberOfRooms"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Mobile Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name={"numberOfRooms"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name={"message"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="rounded-full bg-[#947901] text-white px-4 py-1"
        >
          Inquire Now
        </Button>
      </form>
    </Form>
  );
};

export default RoomInquiryForm;

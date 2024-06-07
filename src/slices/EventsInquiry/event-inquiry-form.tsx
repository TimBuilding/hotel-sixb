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
import eventInquirySchema from "@/lib/event-inquiry-schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";

const EventInquiryForm = () => {
  const form = useForm<z.infer<typeof eventInquirySchema>>({
    resolver: zodResolver(eventInquirySchema),
    defaultValues: {
      eventStart: new Date(),
      eventEnd: new Date(),
      numberOfGuest: 1,
      eventType: "Wedding",
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  return (
    <div className="bg-[#EBE9E9] pt-8 px-4 block pb-5 rounded-2xl md:max-w-64 shadow-lg w-full mt-20 z-10">
      <h2 className="font-bold mb-5">Event Inquiry</h2>
      <Form {...form}>
        <form className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="eventStart"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-black text-sm font-medium">
                  Event Starts
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
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
            name="eventEnd"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-black text-sm font-medium">
                  Event Ends
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
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
            name={"numberOfGuest"}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Guests</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Number of Guests"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Event Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Birthday Package">
                      Birthday Package
                    </SelectItem>
                    <SelectItem value="Wedding Package">
                      Wedding Package
                    </SelectItem>
                    <SelectItem value="Function Room">Function Room</SelectItem>
                  </SelectContent>
                </Select>
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
            name={"email"}
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
            name={"phone"}
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
    </div>
  );
};

export default EventInquiryForm;

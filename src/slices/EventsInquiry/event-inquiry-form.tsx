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

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

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

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitHandler: SubmitHandler<
    z.infer<typeof eventInquirySchema>
  > = async (data) => {
    setIsLoading(true);

    if (!captchaToken) {
      setError("Please verify the captcha");
      setIsLoading(false);
      return;
    }

    setError(null);

    try {
      const response = await fetch("/api/submit-event-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          hcaptchaToken: captchaToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "An error occurred while submitting the form");
      } else {
        // Handle successful submission (e.g., show a success message, reset form, etc.)
        form.reset();
        alert("Event inquiry submitted successfully");
      }
    } catch (error) {
      setError("An error occurred while submitting the form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#EBE9E9] pt-8 px-4 block pb-5 rounded-2xl md:max-w-fit shadow-lg w-full mt-20 z-10">
      <h2 className="font-bold mb-5">Event Inquiry</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="flex flex-col gap-4"
        >
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
                        date < new Date("1900-01-01") || date < new Date()
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
                        date < new Date("1900-01-01") || date < new Date()
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
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
            onVerify={(token) => setCaptchaToken(token)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            className="rounded-full bg-[#947901] text-white px-4 py-1"
            disabled={!captchaToken || isLoading}
          >
            {isLoading ? "Loading..." : "Inquire Now"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EventInquiryForm;

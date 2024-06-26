import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import RoomInquiryForm from "../RoomInformation/room-inquiry-form";
import { Mail, Phone, Pin } from "lucide-react";
import Script from "next/script";

/**
 * Props for `RoomInquiry`.
 */
export type RoomInquiryProps = SliceComponentProps<Content.RoomInquirySlice>;

/**
 * Component for "RoomInquiry" Slices.
 */
const RoomInquiry = ({ slice }: RoomInquiryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage
        field={slice.primary.coverphoto}
        className="w-full h-64 object-cover md:h-[495px] absolute"
      />
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row-reverse pb-10 md:gap-10">
        <div className="bg-[#EBE9E9] pt-8 px-4 block pb-5 rounded-2xl md:max-w-fit shadow-lg w-full mt-20 z-10">
          <h2 className="font-bold mb-5">Room Inquiry</h2>
          <RoomInquiryForm />
        </div>

        <div className="flex flex-col mt-10 md:mt-20 md:flex-row md:justify-center md:gap-14 items-center justify-between w-full">
          <div className="flex flex-col items-start justify-center gap-1 w-80">
            <h2 className="text-2xl font-semibold">Get in Touch!</h2>
            <div className="flex flex-row items-center justify-start gap-4 mt-3">
              <Phone className="w-5 h-5" />
              <span>{slice.primary.phonenumber}</span>
            </div>
            <div className="flex flex-row items-center justify-start gap-4">
              <Mail className="w-5 h-5" />
              <span>{slice.primary.email}</span>
            </div>
            <div className="flex flex-row items-center justify-start gap-4">
              <Pin className="w-5 h-5" />
              <span>{slice.primary.location}</span>
            </div>
          </div>
          <iframe
            width="100%"
            height="270"
            id="gmap_canvas"
            className="mt-10 md:mt-0"
            src="https://maps.google.com/maps?width=438&height=270&hl=en&q=6B%20Isaac%20Tolentino%20Ave,%20%20Brgy.%20San%20Jose%20Tagaytay%20City+(Tagaytay%20Hotel%20SixB)&t=&z=13&ie=UTF8&iwloc=B&output=embed"
          ></iframe>
          <Script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=f0dfc7dfb4f94d6d72857d17f0ca351bd1506cad"
          />
        </div>
      </div>
    </section>
  );
};

export default RoomInquiry;

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  Baby,
  BedDouble,
  BedSingle,
  Clock,
  DoorClosed,
  EggFried,
  GlassWater,
  Heater,
  Refrigerator,
  ShowerHead,
  SquareParking,
  User,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";
import RoomInquiryForm from "./room-inquiry-form";

/**
 * Props for `RoomInformation`.
 */
export type RoomInformationProps =
  SliceComponentProps<Content.RoomInformationSlice>;

/**
 * Component for "RoomInformation" Slices.
 */
const RoomInformation = ({ slice }: RoomInformationProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col md:flex-row gap-5 w-full max-w-5xl mx-auto py-14 px-4 items-start">
        <div className="flex flex-col gap-5 w-full items-center justify-center">
          {/* Images */}
          <div className="flex flex-row h-96 gap-4">
            <PrismicNextImage
              field={slice.primary.images[0].image}
              className="w-[450px] h-96 object-cover rounded-2xl"
            />
            <div className="lg:flex flex-col gap-3 hidden">
              <PrismicNextImage
                field={slice.primary.images[1].image}
                className="w-full h-[calc(50%-6px)] object-cover rounded-2xl"
              />
              <PrismicNextImage
                field={slice.primary.images[2].image}
                className="w-full h-[calc(50%-6px)] object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col gap-5 px-5 md:px-10">
            <h1 className="text-[#947901] text-xl font-bold">
              {slice.primary.title}
            </h1>
            <h2 className="text-[#947901] text-lg font-medium">
              {slice.primary.price}
            </h2>
            <div className="pt-8 pb-4 flex-col gap-5 justify-between flex md:flex-row">
              <div className="flex flex-col gap-1.5 items-start">
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <BedSingle className="w-4 h-4 text-[#5F6368] border-2 border-[#5F6368] p-0.5" />
                  <span className="text-base font-base text-[#5F6368]">
                    {slice.primary.roomsize}
                  </span>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <BedDouble className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {slice.primary.bed}
                  </span>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <User className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {slice.primary.headcount}
                  </span>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <Baby className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {slice.primary.kidscount}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 items-start">
                {slice.primary.breakfast && (
                  <div className="flex flex-row gap-2.5 items-center justify-center">
                    <EggFried className="w-4 h-4 text-[#5F6368]" />
                    <span className="text-base font-base text-[#5F6368]">
                      With breakfast
                    </span>
                  </div>
                )}
                {slice.primary.veranda && (
                  <div className="flex flex-row gap-2.5 items-center justify-center">
                    <DoorClosed className="w-4 h-4 text-[#5F6368]" />
                    <span className="text-base font-base text-[#5F6368]">
                      With sharing veranda
                    </span>
                  </div>
                )}
                {slice.primary.lakeview && (
                  <div className="flex flex-row gap-2.5 items-center justify-center">
                    <Waves className="w-4 h-4 text-[#5F6368]" />
                    <span className="text-base font-base text-[#5F6368]">
                      With lakeview
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1.5 items-start">
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <Clock className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    Check-in time: {slice.primary.checkintime}
                  </span>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <Clock className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    Check-out time: {slice.primary.checkouttime}
                  </span>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <h2 className="text-[#947901] pt-3 text-lg font-medium">
              Amenities
            </h2>
            <div className="pt-2 pb-4 flex-col gap-5 justify-between flex md:flex-row">
              <div className="flex flex-col gap-1.5 items-start">
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <Wifi className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {slice.primary.freewifi}
                  </span>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <SquareParking className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {slice.primary.freeparking}
                  </span>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <Waves className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {slice.primary.outdoorinfinitypool}
                  </span>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <ShowerHead className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {slice.primary.hotshower}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 items-start">
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <Refrigerator className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {slice.primary.minibar}
                  </span>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <GlassWater className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {slice.primary.water}
                  </span>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <Heater className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {slice.primary.kettle}
                  </span>
                </div>
              </div>
            </div>

            {/* Restaurants */}
            <div className="mt-2">
              <h2 className="text-[#5F6368] flex flex-row items-center justify-start gap-2">
                <Utensils className="w-4 h-4" />
                Access to our in-house restaurants:
              </h2>
              <div className="text-base font-base text-[#5F6368] pl-6">
                <PrismicRichText field={slice.primary.restaurants} />
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#EBE9E9] pt-8 px-4 pb-5 rounded-2xl md:max-w-64 shadow-lg w-full">
          <h2 className="font-bold mb-5">Room Inquiry</h2>
          <RoomInquiryForm />
        </div>
      </div>
    </section>
  );
};

export default RoomInformation;

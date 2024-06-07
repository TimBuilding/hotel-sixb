import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  BedSingle,
  BedDouble,
  User,
  Baby,
  EggFried,
  DoorClosed,
  Waves,
  Clock,
  Wifi,
  SquareParking,
  ShowerHead,
  Refrigerator,
  GlassWater,
  Coffee,
  Heater,
  Utensils,
} from "lucide-react";

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
      <h2 className="text-[#947901] pt-3 text-lg font-medium">Amenities</h2>
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
    </section>
  );
};

export default RoomInformation;

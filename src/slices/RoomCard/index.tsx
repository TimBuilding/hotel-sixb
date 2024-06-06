import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import {
  Baby,
  BedDouble,
  BedSingle,
  DoorClosed,
  EggFried,
  User,
  Waves,
} from "lucide-react";

/**
 * Props for `Room`.
 */
export type RoomProps = SliceComponentProps<Content.RoomSlice>;

/**
 * Component for "Room" Slices.
 */
const Room = ({ slice }: RoomProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="shadow-lg rounded-2xl w-full max-w-lg">
        <PrismicNextImage
          field={slice.primary.image}
          className="h-64 object-cover w-full"
        />
        <div className="bg-[#947901] p-4">
          <span className="text-white py-4 px-7 font-medium text-xl leading-7">
            {slice.primary.title}
          </span>
        </div>
        <div className="bg-[#F3F3F3] pt-8 pb-4 grid grid-cols-2 gap-3 md:grid">
          <div className="flex flex-row gap-2.5 items-center justify-center">
            <BedSingle className="w-4 h-4 text-[#5F6368] border-2 border-[#5F6368] p-0.5" />
            <span className="text-base font-base text-[#5F6368]">22.6 sqm</span>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-center">
            <EggFried className="w-4 h-4 text-[#5F6368]" />
            <span className="text-base font-base text-[#5F6368]">22.6 sqm</span>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-center">
            <BedDouble className="w-4 h-4 text-[#5F6368]" />
            <span className="text-base font-base text-[#5F6368]">22.6 sqm</span>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-center">
            <DoorClosed className="w-4 h-4 text-[#5F6368]" />
            <span className="text-base font-base text-[#5F6368]">22.6 sqm</span>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-center">
            <User className="w-4 h-4 text-[#5F6368]" />
            <span className="text-base font-base text-[#5F6368]">22.6 sqm</span>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-center">
            <Waves className="w-4 h-4 text-[#5F6368]" />
            <span className="text-base font-base text-[#5F6368]">22.6 sqm</span>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-center">
            <Baby className="w-4 h-4 text-[#5F6368]" />
            <span className="text-base font-base text-[#5F6368]">22.6 sqm</span>
          </div>
        </div>
        <div className="bg-white py-5 px-7 flex flex-row items-center justify-between">
          <span className="text-[#947901] text-2xl font-bold">
            ₱{slice.primary.price}
          </span>
          <Button className="py-2 px-6 rounded-full bg-[#947901]">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Room;

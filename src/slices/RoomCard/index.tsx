import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import {
  ArrowRight,
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
      <div className="shadow-lg w-full md:max-w-lg rounded-2xl">
        <PrismicNextImage
          field={slice.primary.image}
          className="md:h-64 h-44 object-cover w-full rounded-t-2xl"
        />
        <div className="bg-[#947901] md:p-4 p-2.5">
          <span className="text-white md:py-4 md:px-3 font-medium text-sm md:text-xl leading-7">
            {slice.primary.title}
          </span>
        </div>
        <div className="bg-[#F3F3F3] pt-8 pb-4 px-8 flex-row justify-between md:flex hidden">
          <div className="flex flex-col gap-3 items-start">
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

          <div className="flex flex-col gap-3 items-start">
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
        </div>
        <div className="bg-white md:py-5 md:px-7 py-2.5 px-2 flex flex-row items-center justify-between rounded-b-2xl">
          <span className="text-[#947901] md:text-2xl font-bold md:pl-0 pl-3">
            ₱{slice.primary.price}
          </span>
          <Button className="py-2 px-6 rounded-full bg-[#947901] hidden md:block">
            View More
          </Button>
          <Button variant={"ghost"} size={"icon"} className="md:hidden">
            <ArrowRight className="text-[#947901]" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Room;

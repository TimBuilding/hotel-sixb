import { Button } from "@/components/ui/button";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import {
  BedSingle,
  EggFried,
  BedDouble,
  DoorClosed,
  User,
  Waves,
  Baby,
  ArrowRight,
} from "lucide-react";

/**
 * Props for `RoomsSection`.
 */
export type RoomsSectionProps = SliceComponentProps<Content.RoomsSectionSlice>;

/**
 * Component for "RoomsSection" Slices.
 */
const RoomsSection = async ({
  slice,
}: RoomsSectionProps): Promise<JSX.Element> => {
  const client = createClient();
  const rooms = await client.getByUID("rooms", "room-cards");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-2 max-w-5xl w-full mx-auto gap-5 md:gap-16 px-6 pb-10 md:pb-16">
        {rooms.data.slices.map((room) => (
          <div key={room.id} className="shadow-lg w-full md:max-w-lg rounded-2xl">
            <PrismicNextImage
              field={room.primary.image}
              className="md:h-64 h-44 object-cover w-full rounded-t-2xl"
            />
            <div className="bg-[#947901] md:p-4 p-2.5">
              <span className="text-white md:py-4 md:px-3 font-medium text-sm md:text-xl leading-7">
                {room.primary.title}
              </span>
            </div>
            <div className="bg-[#F3F3F3] pt-8 pb-4 px-8 flex-row justify-between md:flex hidden">
              <div className="flex flex-col gap-3 items-start">
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <BedSingle className="w-4 h-4 text-[#5F6368] border-2 border-[#5F6368] p-0.5" />
                  <span className="text-base font-base text-[#5F6368]">
                    {room.primary.roomsize}
                  </span>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <BedDouble className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {room.primary.bed}
                  </span>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <User className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {room.primary.headcount}
                  </span>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <Baby className="w-4 h-4 text-[#5F6368]" />
                  <span className="text-base font-base text-[#5F6368]">
                    {room.primary.kidscount}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 items-start">
                {room.primary.breakfast && (
                  <div className="flex flex-row gap-2.5 items-center justify-center">
                    <EggFried className="w-4 h-4 text-[#5F6368]" />
                    <span className="text-base font-base text-[#5F6368]">
                      With breakfast
                    </span>
                  </div>
                )}
                {room.primary.veranda && (
                  <div className="flex flex-row gap-2.5 items-center justify-center">
                    <DoorClosed className="w-4 h-4 text-[#5F6368]" />
                    <span className="text-base font-base text-[#5F6368]">
                      With sharing veranda
                    </span>
                  </div>
                )}
                {room.primary.balcony && (
                  <div className="flex flex-row gap-2.5 items-center justify-center">
                    <DoorClosed className="w-4 h-4 text-[#5F6368]" />
                    <span className="text-base font-base text-[#5F6368]">
                      With Balcony
                    </span>
                  </div>
                )}
                {room.primary.lakeview && (
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
              <span className="text-[#947901] md:text-2xl font-semibold md:pl-0 pl-3">
                ₱ {room.primary.price}
              </span>
              <Button className="py-2 px-6 rounded-full bg-[#947901] hidden md:block">
                View More
              </Button>
              <Button variant={"ghost"} size={"icon"} className="md:hidden">
                <ArrowRight className="text-[#947901]" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;

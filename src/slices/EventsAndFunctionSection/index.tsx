import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import {
  CircleCheckBig,
  DoorOpen,
  Headset,
  Projector,
  ShieldCheck,
  SquareParking,
  UserRound,
  Utensils,
  Wifi
} from "lucide-react";
import {Button} from "@/components/ui/button";

/**
 * Props for `EventsAndFunctionSection`.
 */
export type EventsAndFunctionSectionProps =
  SliceComponentProps<Content.EventsAndFunctionSectionSlice>;

/**
 * Component for "EventsAndFunctionSection" Slices.
 */
const EventsAndFunctionSection = ({
  slice,
}: EventsAndFunctionSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col justify-between items-center py-9">
        <h1 className="text-3xl font-bold text-[#947901]">{slice.primary.title}</h1>
        <h1 className="text-2xl font-semibold pt-4 text-center">{slice.primary.subtitle}</h1>
        <div className="bg-white mx-20 my-10 p-16 flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col">
              <PrismicNextImage field={slice.primary.eventimage1} className="w-72 h-72 object-cover rounded-t-2xl"/>
              <h2 className="text-white text-2xl font-semibold bg-[#947901] text-left p-4 w-72">{slice.primary.eventname1}</h2>
              <div className="pt-8">
                <div className="flex flex-row text-gray-600 items-center gap-2">
                  <UserRound className="w-5 h-6"/>
                  <h2 className="font-semibold text-lg">{slice.primary.numberofguests}</h2>
                </div>
                <div className="flex flex-row text-gray-600 items-center gap-2">
                  <Utensils className="w-5 h-6"/>
                  <h2 className="font-semibold text-lg">{slice.primary.cateringoptions}</h2>
                </div>
                <div className="flex flex-row text-gray-600 items-center gap-2">
                  <Wifi className="w-5 h-6"/>
                  <h2 className="font-semibold text-lg">{slice.primary.wifi}</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <PrismicNextImage field={slice.primary.eventimage2} className="w-72 h-72 object-cover rounded-t-2xl"/>
              <h2 className="text-white text-2xl font-semibold bg-[#947901] text-left p-4 w-72">{slice.primary.eventname2}</h2>
              <div className="pt-8">
                <div className="flex flex-row text-gray-600 items-center gap-2">
                  <Projector className="w-5 h-6"/>
                  <h2 className="font-semibold text-lg">{slice.primary.projector}</h2>
                </div>
                <div className="flex flex-row text-gray-600 items-center gap-2 w-72">
                  <CircleCheckBig className="w-5 h-6"/>
                  <h2 className="font-semibold text-lg">{slice.primary.restroom}</h2>
                </div>
                <div className="flex flex-row text-gray-600 items-center gap-2 w-72">
                  <DoorOpen className="w-5 h-6"/>
                  <h2 className="font-semibold text-lg">{slice.primary.functionroom}</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <PrismicNextImage field={slice.primary.eventimage3} className="w-72 h-72 object-cover rounded-t-2xl"/>
              <h2 className="text-white text-2xl font-semibold bg-[#947901] text-left p-4 w-72">{slice.primary.eventname3}</h2>
              <div className="pt-8">
                <div className="flex flex-row text-gray-600 items-center gap-2">
                  <ShieldCheck className="w-5 h-6"/>
                  <h2 className="font-semibold text-lg">{slice.primary.security}</h2>
                </div>
                <div className="flex flex-row text-gray-600 items-center gap-2">
                  <Headset className="w-5 h-6"/>
                  <h2 className="font-semibold text-lg">{slice.primary.staffsupport}</h2>
                </div>
                <div className="flex flex-row text-gray-600 items-center gap-2">
                  <SquareParking className="w-5 h-6"/>
                  <h2 className="font-semibold text-lg">{slice.primary.parking}</h2>
                </div>
              </div>
            </div>

          </div>
          <Button className="bg-[#947901] rounded-3xl w-40 mx-auto">
            <PrismicNextLink field={slice.primary.buttonlink}>
              <h2 className="text-xl font-bold text-white text-center">{slice.primary.buttontext}</h2>
            </PrismicNextLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsAndFunctionSection;

import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `EventsAndFunction`.
 */
export type EventsAndFunctionProps =
  SliceComponentProps<Content.EventsAndFunctionSlice>;

/**
 * Component for "EventsAndFunction" Slices.
 */
const EventsAndFunction = ({ slice }: EventsAndFunctionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-[#FFF6D9] w-full">
        <div className="max-w-5xl w-full mx-auto py-10 px-5 md:py-8 flex flex-col items-center justify-center md:flex-row lg:gap-28 overflow-hidden">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h2 className="font-medium text-center md:text-left">
              {slice.primary.title}
            </h2>
            <h3 className="text-center text-lg font-bold mt-2 md:text-left md:w-[350px]">
              {slice.primary.description}
            </h3>

            <div className="mt-6 md:mt-4 flex flex-col items-center justify-center">
              <Button className="rounded-full bg-[#947901] px-5 py-1">
                <PrismicNextLink field={slice.primary.buttonurl}>
                  {slice.primary.buttontext}
                </PrismicNextLink>
              </Button>
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-7">
            <PrismicNextImage
              field={slice.primary.image1}
              className="rounded-lg w-40 h-56 object-cover shadow md:rounded-3xl"
            />
            <PrismicNextImage
              field={slice.primary.image2}
              className="rounded-lg w-40 h-56 object-cover shadow md:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsAndFunction;

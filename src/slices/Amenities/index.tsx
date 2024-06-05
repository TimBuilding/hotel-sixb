import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
/**
 * Props for `Amenities`.
 */
export type AmenitiesProps = SliceComponentProps<Content.AmenitiesSlice>;

/**
 * Component for "Amenities" Slices.
 */
const Amenities = ({ slice }: AmenitiesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="py-9 px-6 md:px-28 md:py-14">
        <h2 className="font-medium text-center">{slice.primary.title}</h2>
        <h3 className="text-center text-lg font-bold mt-2">
          {slice.primary.description}
        </h3>

        <div className="flex flex-col gap-3 mt-6 md:mt-8 md:flex-row md:gap-5">
          <PrismicNextImage
            field={slice.primary.image1}
            className="shadow-2xl w-full h-48 md:w-80 md:h-72 object-cover"
          />
          <PrismicNextImage
            field={slice.primary.image2}
            className="shadow-2xl w-full h-48 md:w-80 md:h-72 object-cover"
          />
          <PrismicNextImage
            field={slice.primary.image3}
            className="shadow-2xl w-full h-48 md:w-80 md:h-72 object-cover"
          />
        </div>

        <div className="mt-6 md:mt-8 flex flex-col items-center justify-center">
          <Button className="rounded-full bg-[#947901] px-5 py-1">
            <PrismicNextLink field={slice.primary.buttonurl}>
              {slice.primary.buttontext}
            </PrismicNextLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Amenities;

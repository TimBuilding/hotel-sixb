import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AmenitiesImages`.
 */
export type AmenitiesImagesProps =
  SliceComponentProps<Content.AmenitiesImagesSlice>;

/**
 * Component for "AmenitiesImages" Slices.
 */
const AmenitiesImages = ({ slice }: AmenitiesImagesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-white w-full max-w-5xl py-7 md:px-16 px-7 mx-auto">
        <h2 className="text-[#947901] text-xl font-semibold">
          {slice.primary.title}
        </h2>
        <div className="flex flex-col gap-16 md:mt-7 mt-4">
          {slice.primary.gallery.map((item) => (
            <PrismicNextImage
              key={item.id}
              field={item.image}
              className="w-full rounded-2xl h-56 object-cover md:h-96"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesImages;

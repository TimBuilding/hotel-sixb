import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <PrismicNextImage field={slice.primary.hero} className="w-full object-cover md:h-[662px] "/>
      </div>
    </section>
  );
};

export default Hero;

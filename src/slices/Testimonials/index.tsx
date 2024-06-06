import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Carousel>
        <CarouselContent>
          <CarouselItem></CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Testimonials;

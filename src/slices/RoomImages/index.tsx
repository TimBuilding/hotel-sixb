import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RoomImages`.
 */
export type RoomImagesProps = SliceComponentProps<Content.RoomImagesSlice>;

/**
 * Component for "RoomImages" Slices.
 */
const RoomImages = ({ slice }: RoomImagesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for room_images (variation: {slice.variation})
      Slices
    </section>
  );
};

export default RoomImages;

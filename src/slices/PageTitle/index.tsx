import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PageTitle`.
 */
export type PageTitleProps = SliceComponentProps<Content.PageTitleSlice>;

/**
 * Component for "PageTitle" Slices.
 */
const PageTitle = ({ slice }: PageTitleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="space-y-2.5 w-72 mx-auto py-9 md:space-x-3 md:w-full">
        <h1 className="text-[#947901] font-extrabold text-xl text-center md:text-3xl">
          {slice.primary.title}
        </h1>
        <h2 className="text-center font-bold md:text-2xl">
          {slice.primary.description}
        </h2>
      </div>
    </section>
  );
};

export default PageTitle;

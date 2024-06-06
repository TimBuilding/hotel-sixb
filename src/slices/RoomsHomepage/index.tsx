import {Content} from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import {cn} from "@/lib/utils";
import {PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import {Button} from "@/components/ui/button";

/**
 * Props for `RoomsHomepage`.
 */
export type RoomsHomepageProps =
    SliceComponentProps<Content.RoomsHomepageSlice>;

/**
 * Component for "RoomsHomepage" Slices.
 */
const RoomsHomepage = ({slice}: RoomsHomepageProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="md:hidden">
                <div
                    className={cn(slice.variation === 'default' ? 'flex-row' : 'flex-row-reverse ', "flex gap-4 bg-zinc-100")}>
                    <div className={cn(slice.variation === 'default' ? 'p-8' : 'px-3 py-8', "flex flex-col gap-5")}>
                        <h1 className="font-semibold text-sm">{slice.primary.title}</h1>
                        <h1 className="font-bold text-base ">{slice.primary.description}</h1>
                        <Button className="rounded-3xl bg-[#947901] py-1 px-4">
                            <PrismicNextLink field={slice.primary.buttonlink}>
                                <h2 className="text-base ">{slice.primary.buttontext}</h2>
                            </PrismicNextLink>
                        </Button>
                    </div>
                    <PrismicNextImage field={slice.primary.roomimage} className="object-cover shadow w-[205px] h-auto"/>
                </div>
            </div>
            <div className="hidden md:block">
                <div
                    className={cn(slice.variation === 'default' ? 'flex-row' : 'flex-row-reverse', "flex gap-4 bg-zinc-100 items-center justify-between")}>
                    <div className="flex flex-col gap-6 p-16 xl:p-24">
                        <h1 className="font-semibold text-2xl">{slice.primary.title}</h1>
                        <h1 className="font-bold text-3xl text-pretty ">{slice.primary.description}</h1>
                        <Button className="rounded-3xl bg-[#947901] w-44">
                            <PrismicNextLink field={slice.primary.buttonlink}>
                                <h2 className="text-xl">{slice.primary.buttontext}</h2>
                            </PrismicNextLink>
                        </Button>
                    </div>
                    <PrismicNextImage field={slice.primary.roomimage} className="object-cover shadow w-[630px] h-auto"/>
                </div>
            </div>
        </section>
    );
};

export default RoomsHomepage;

import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({slice}: TestimonialsProps): JSX.Element => {
    // const [api, setApi] = useState<CarouselApi>();
    // const [current, setCurrent] = useState(0);
    // const [count, setCount] = useState(0);
    //
    // useEffect(() => {
    //     if (!api) {
    //         return;
    //     }
    //
    //     setCount(api.scrollSnapList().length);
    //     setCurrent(api.selectedScrollSnap() + 1);
    //
    //     api.on('select', () => {
    //         setCurrent(api.selectedScrollSnap() + 1);
    //     });
    // }, [api]);
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className=" md:hidden bg-white w-full my-10">
                <div className="flex flex-col mx-auto text-center">
                    <h2 className="text-black text-sm font-semibold">{slice.primary.title1}</h2>
                    <h1 className="text-black text-base font-bold">{slice.primary.subtitle1}</h1>
                </div>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <div className="flex flex-col mx-auto text-center">
                                <div className=" mt-6 w-56 mx-auto">
                                    <h2 className="text-black text-lg font-semibold italic">{slice.primary.testimony1}</h2>
                                    <h2 className="text-black text-md font-light italic">{slice.primary.witness1}</h2>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex flex-col mx-auto text-center">
                                <div className="mt-6 w-56 mx-auto">
                                    <h2 className="text-black text-lg font-semibold italic">{slice.primary.testimony2}</h2>
                                    <h2 className="text-black text-md font-light italic">{slice.primary.witness2}</h2>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex flex-col mx-auto text-center">
                                <div className="mt-6 w-56 mx-auto">
                                    <h2 className="text-black text-lg font-semibold italic">{slice.primary.testimony3}</h2>
                                    <h2 className="text-black text-md font-light italic">{slice.primary.witness3}</h2>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    {/*<div className="flex flex-row justify-center mt-4">*/}
                    {/*    {Array.from({length: count}).map((_, index) => (*/}
                    {/*        <span*/}
                    {/*            key={index}*/}
                    {/*            className={cn(index + 1 === current ? 'bg-gray-800' : 'bg-gray-400', ' w-3 h-3 rounded-full mx-2')}*/}
                    {/*            onClick={() => api && api.scrollTo(index)}*/}
                    {/*        />*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                    <CarouselDots classname="mt-4"/>
                </Carousel>
            </div>

            <div className="hidden md:flex bg-white text-center flex-col py-10">
                <div className="flex flex-col">
                    <h2 className="text-black text-2xl font-semibold">{slice.primary.title1}</h2>
                    <h1 className="text-black text-3xl font-bold">{slice.primary.subtitle1}</h1>
                </div>
                <div className="flex flex-row justify-between items-center mt-20 mx-12 mb-6 ">
                    <div className="flex flex-col">
                        <div className="mt-2 w-56 mx-auto">
                            <h2 className="text-black text-2xl font-semibold italic">{slice.primary.testimony1}</h2>
                            <h2 className="text-black text-2xl font-light italic">{slice.primary.witness1}</h2>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-2 w-56 mx-auto">
                            <h2 className="text-black text-2xl font-semibold italic">{slice.primary.testimony1}</h2>
                            <h2 className="text-black text-2xl font-light italic">{slice.primary.witness1}</h2>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-2 w-56 mx-auto">
                            <h2 className="text-black text-2xl font-semibold italic">{slice.primary.testimony1}</h2>
                            <h2 className="text-black text-2xl font-light italic">{slice.primary.witness1}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

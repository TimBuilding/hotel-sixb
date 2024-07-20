'use client'
import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import React from "react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({slice}: HeroProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
           <video playsInline autoPlay muted loop preload="auto" className="w-full object-cover md:h-[662px] ">
                <source src="https://myqdulmpjkadtzfdpgas.supabase.co/storage/v1/object/public/media/youtube_9rCtHliJAec_1280x720_h264.mp4?t=2024-07-20T13%3A43%3A46.690Z#t=3"
                        type="video/mp4"/>
           </video>
        </section>
    );
};

export default Hero;

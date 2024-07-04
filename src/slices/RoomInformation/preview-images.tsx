"use client";

import { FC, useState } from "react";
import {
  Simplify,
  RoomInformationSliceDefaultPrimary,
} from "../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  room: Simplify<RoomInformationSliceDefaultPrimary>;
}

const PreviewImages: FC<Props> = ({ room }) => {
  const [open, setIsOpen] = useState(false);

  const images = room.images.map((image) => ({
    src: image.image.url,
  }));

  return (
    <>
      <div className="flex flex-row h-96 gap-4">
        <PrismicNextImage
          field={room.images[0].image}
          className="w-[450px] h-96 object-cover rounded-2xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        <div className="lg:flex flex-col gap-3 hidden">
          <PrismicNextImage
            onClick={() => setIsOpen(true)}
            field={room.images[1].image}
            className="w-full h-[calc(50%-6px)] object-cover rounded-2xl"
          />
          <div
            className="relative h-[calc(50%-6px)] w-full cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <PrismicNextImage
              field={room.images[2].image}
              className="h-full object-cover rounded-2xl"
            />
            <div className="absolute py-1.5 rounded-b-2xl bg-[#947901] bottom-0 left-0 h-fit w-full text-white text-center text-[15px] font-bold">
              View Photos
            </div>
          </div>
        </div>
      </div>
      <Lightbox open={open} close={() => setIsOpen(false)} slides={images} />
    </>
  );
};

export default PreviewImages;

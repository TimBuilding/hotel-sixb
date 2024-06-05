import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

import FacebookIcon from "@/assets/icons/facebook-icon";
import InstagramIcon from "@/assets/icons/instagram-icon";
import { Separator } from "./ui/separator";

const Navigation = async () => {
  const client = createClient();
  const navigation = await client.getSingle("navigation");

  return (
    <nav>
      <div className="mt-6 md:flex flex-row items-center justify-between md:px-7 md:py-3">
        <Sheet>
          <SheetTrigger asChild={true}>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="absolute left-6 md:hidden"
            >
              <Menu className="text-[#947901]" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader className="flex flex-row items-center justify-center mt-6">
              <PrismicNextImage
                field={navigation.data.logo}
                width={182}
                height={36}
              />
            </SheetHeader>
            <div className="'flex flex-col mt-6">
              {/* Renders top-level links. */}
              {navigation.data.slices.map((slice) => {
                return (
                  <Button key={slice.id} variant={"ghost"} className="w-full">
                    <PrismicNextLink field={slice.primary.link}>
                      <>{slice.primary.name}</>
                    </PrismicNextLink>
                  </Button>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex flex-row items-center justify-center gap-2.5">
          <FacebookIcon />
          <InstagramIcon />
        </div>
        <div className="flex flex-row items-center justify-center">
          <PrismicNextImage
            field={navigation.data.logo}
            width={182}
            height={36}
          />
        </div>
        <Button className="hidden md:flex rounded-full bg-[#947901] text-white py-2[9px] px-6">
          Book Now
        </Button>
      </div>
      <Separator className="hidden md:block" />
      <div className="flex-row items-center justify-center px-7 gap-3 py-3 hidden md:flex">
        {navigation.data.slices.map((slice) => {
          return (
            <Button key={slice.id} variant={"ghost"} className="w-fit">
              <PrismicNextLink field={slice.primary.link}>
                <>{slice.primary.name}</>
              </PrismicNextLink>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;

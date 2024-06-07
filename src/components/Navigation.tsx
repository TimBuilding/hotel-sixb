import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

import FacebookIcon from "@/assets/icons/facebook-icon";
import InstagramIcon from "@/assets/icons/instagram-icon";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Navigation = async () => {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "header-menu");

  return (
    <nav>
      <div className="py-6 flex-row items-center justify-between md:flex md:px-7 md:py-3">
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
            <SheetHeader className="mt-6 flex flex-row items-center justify-center">
              <PrismicNextImage
                field={navigation.data.logo}
                width={182}
                height={36}
              />
            </SheetHeader>
            <div className="'flex mt-6 flex-col">
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
        <div className="hidden flex-row items-center justify-center gap-2.5 md:flex">
          <Link
            href={"https://www.facebook.com/TagaytayHotelSixB"}
            target="_blank"
          >
            <FacebookIcon />
          </Link>
          <Link
            href={"https://www.instagram.com/tagaytayhotelsixb/"}
            target="_blank"
          >
            <InstagramIcon />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Link href="/">
            <PrismicNextImage
              field={navigation.data.logo}
              width={182}
              height={36}
            />
          </Link>
        </div>
        <Button className="py-2[9px] hidden rounded-full bg-[#947901] px-6 text-white md:flex">
          <PrismicNextLink field={navigation.data.rightbuttonlink}>
            {navigation.data.rightbuttontext}
          </PrismicNextLink>
        </Button>
      </div>
      <Separator className="hidden md:block" />
      <div className="hidden flex-row items-center justify-center gap-3 px-7 py-3 md:flex">
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

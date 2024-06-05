import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

const Navigation = async () => {
  const client = createClient();
  const navigation = await client.getSingle("navigation");

  return (
    <nav className="mt-6">
      <Sheet>
        <SheetTrigger asChild={true}>
          <Button variant={"ghost"} size={"icon"} className="absolute left-6">
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
        <div className="flex flex-row items-center justify-center">
          <PrismicNextImage
            field={navigation.data.logo}
            width={182}
            height={36}
          />
        </div>
      </Sheet>
    </nav>
  );
};

export default Navigation;

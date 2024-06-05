import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = async () => {
  const client = createClient();
  const navigation = await client.getSingle("navigation");

  return (
    <nav>
      <div className="flex flex-row items-center justify-center">
        <Button variant={"ghost"} size={"icon"}>
          <Menu />
        </Button>
        <PrismicNextImage
          field={navigation.data.logo}
          width={182}
          height={36}
        />
      </div>

      <ul>
        {/* Renders top-level links. */}
        {navigation.data.slices.map((slice) => {
          return (
            <li key={slice.id}>
              <PrismicNextLink field={slice.primary.link}>
                <>{slice.primary.name}</>
              </PrismicNextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

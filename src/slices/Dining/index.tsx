import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

/**
 * Props for `Dining`.
 */
export type DiningProps = SliceComponentProps<Content.DiningSlice>;

/**
 * Component for "Dining" Slices.
 */
const Dining = ({ slice }: DiningProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="lg:hidden py-9">
        <Tabs
          defaultValue="diningtab1"
          className="mx-auto bg-white p-10 flex flex-col"
        >
          <TabsList className=" mx-auto bg-white h-auto flex flex-col justify-between items-center gap-2 ">
            <TabsTrigger
              value="diningtab1"
              className="bg-[#947901] hover:bg-[#774E17] rounded-3xl w-full"
            >
              <h2 className="text-sm font-bold text-white">
                {slice.primary.diningtab1}
              </h2>
            </TabsTrigger>
            <TabsTrigger
              value="diningtab2"
              className="bg-[#947901] hover:bg-[#774E17] rounded-3xl w-full"
            >
              <h2 className="text-sm font-bold text-white">
                {slice.primary.diningtab2}
              </h2>
            </TabsTrigger>
            {/*<TabsTrigger*/}
            {/*  value="diningtab3"*/}
            {/*  className="bg-[#947901] hover:bg-[#774E17] rounded-3xl w-full"*/}
            {/*>*/}
            {/*  <h2 className="text-sm font-bold text-white">*/}
            {/*    {slice.primary.diningtab3}*/}
            {/*  </h2>*/}
            {/*</TabsTrigger>*/}
          </TabsList>
          <TabsContent value="diningtab1">
            <div className="flex flex-col py-8 w-full gap-2 ">
              <PrismicNextImage
                field={slice.primary.diningmainimage1}
                className="w-full h-auto object-cover"
              />
              <div className="flex flex-col bg-[#FFF6D9] w-full min-h-fit p-12 justify-center items-center">
                <Separator className="bg-[#947901]" />
                <h2 className="text-md font-semibold text-[#947901] py-2 text-center">
                  {slice.primary.diningname1}
                </h2>
                <Separator className="bg-[#947901]" />
                <h2 className="text-sm font-semibold text-[#947901] text-center p-4">
                  {slice.primary.diningdescription1}
                </h2>
                <Button className="bg-[#947901] rounded-3xl w-36 ">
                  <PrismicNextLink field={slice.primary.diningbuttonlink1}>
                    <h2 className="text-md font-bold text-white text-center">
                      {slice.primary.diningbuttontext1}
                    </h2>
                  </PrismicNextLink>
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                {slice.primary.diningimagestab1.map((item) => {
                  //@ts-ignore
                  return (
                    <PrismicNextImage
                      key={item.id}
                      field={item.diningimage1}
                      className="rounded-2xl w-auto h-auto "
                    />
                  );
                })}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="diningtab2">
            <div className="flex flex-col py-8 w-full gap-2 ">
              <PrismicNextImage
                field={slice.primary.diningmainimage2}
                className="w-full h-auto object-cover"
              />
              <div className="flex flex-col bg-[#FFF6D9] w-full min-h-fit p-12 justify-center items-center">
                <Separator className="bg-[#947901]" />
                <h2 className="text-md font-semibold text-[#947901] py-2 text-center">
                  {slice.primary.diningname2}
                </h2>
                <Separator className="bg-[#947901]" />
                <h2 className="text-sm font-semibold text-[#947901] text-center p-4">
                  {slice.primary.diningdescription2}
                </h2>
                <Button className="bg-[#947901] rounded-3xl w-36 ">
                  <PrismicNextLink field={slice.primary.diningbuttonlink1}>
                    <h2 className="text-md font-bold text-white text-center">
                      {slice.primary.diningbuttontext2}
                    </h2>
                  </PrismicNextLink>
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                {slice.primary.diningimagestab2.map((item) => {
                  //@ts-ignore
                  return (
                    <PrismicNextImage
                      key={item.id}
                      field={item.diningimage1}
                      className="rounded-2xl w-auto h-auto "
                    />
                  );
                })}
              </div>
            </div>
          </TabsContent>
          {/*<TabsContent value="diningtab3">*/}
          {/*  <div className="flex flex-col py-8 w-full gap-2 ">*/}
          {/*    <PrismicNextImage*/}
          {/*      field={slice.primary.diningmainimage3}*/}
          {/*      className="w-full h-auto object-cover"*/}
          {/*    />*/}
          {/*    <div className="flex flex-col bg-[#FFF6D9] w-full min-h-fit p-12 justify-center items-center">*/}
          {/*      <Separator className="bg-[#947901]" />*/}
          {/*      <h2 className="text-md font-semibold text-[#947901] py-2 text-center">*/}
          {/*        {slice.primary.diningname3}*/}
          {/*      </h2>*/}
          {/*      <Separator className="bg-[#947901]" />*/}
          {/*      <h2 className="text-sm font-semibold text-[#947901] text-center p-4">*/}
          {/*        {slice.primary.diningdescription3}*/}
          {/*      </h2>*/}
          {/*      <Button className="bg-[#947901] rounded-3xl w-36 ">*/}
          {/*        <PrismicNextLink field={slice.primary.diningbuttonlink3}>*/}
          {/*          <h2 className="text-md font-bold text-white text-center">*/}
          {/*            {slice.primary.diningbuttontext3}*/}
          {/*          </h2>*/}
          {/*        </PrismicNextLink>*/}
          {/*      </Button>*/}
          {/*    </div>*/}
          {/*    <div className="flex flex-col gap-2">*/}
          {/*      {slice.primary.diningimagestab3.map((item) => {*/}
          {/*        //@ts-ignore*/}
          {/*        return (*/}
          {/*          <PrismicNextImage*/}
          {/*            key={item.id}*/}
          {/*            field={item.diningimage1}*/}
          {/*            className="rounded-2xl w-auto h-auto "*/}
          {/*          />*/}
          {/*        );*/}
          {/*      })}*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</TabsContent>*/}
        </Tabs>
      </div>
      <div className="py-9 hidden lg:block mx-auto ">
        <Tabs
          defaultValue="diningtab1"
          className="bg-white px-20 py-16 my-16 mx-auto xl:mx-20"
        >
          <TabsList className="flex flex-row justify-between items-center gap-2 lg:gap-4 bg-white mx-auto">
            <TabsTrigger
              value="diningtab1"
              className="bg-[#947901] hover:bg-[#774E17] rounded-3xl w-full px-8"
            >
              <h2 className="text-xl font-bold text-white">
                {slice.primary.diningtab1}
              </h2>
            </TabsTrigger>
            <TabsTrigger
              value="diningtab2"
              className="bg-[#947901] hover:bg-[#774E17] rounded-3xl w-full px-8"
            >
              <h2 className="text-xl font-bold text-white">
                {slice.primary.diningtab2}
              </h2>
            </TabsTrigger>
            {/*<TabsTrigger*/}
            {/*  value="diningtab3"*/}
            {/*  className="bg-[#947901] hover:bg-[#774E17] rounded-3xl w-full px-8"*/}
            {/*>*/}
            {/*  <h2 className="text-xl font-bold text-white">*/}
            {/*    {slice.primary.diningtab3}*/}
            {/*  </h2>*/}
            {/*</TabsTrigger>*/}
          </TabsList>
          <TabsContent value="diningtab1">
            <div className="flex flex-col">
              <div className="flex flex-row py-8 w-full ">
                <PrismicNextImage
                  field={slice.primary.diningmainimage1}
                  className="w-1/2 h-auto object-cover"
                />
                <div className="flex flex-col bg-[#FFF6D9] w-1/2 min-h-fit p-12">
                  <Separator className="bg-[#947901]" />
                  <h2 className="text-xl font-semibold text-[#947901] py-2">
                    {slice.primary.diningname1}
                  </h2>
                  <Separator className="bg-[#947901]" />
                  <h2 className="text-xl font-semibold text-[#947901] p-10">
                    {slice.primary.diningdescription1}
                  </h2>
                  <Button className="bg-[#947901] rounded-3xl w-36 mx-10 ">
                    <PrismicNextLink field={slice.primary.diningbuttonlink1}>
                      <h2 className="text-xl font-bold text-white text-center">
                        {slice.primary.diningbuttontext1}
                      </h2>
                    </PrismicNextLink>
                  </Button>
                </div>
              </div>
              <div className="justify-between items-center flex flex-row gap-2">
                {slice.primary.diningimagestab1.map((item) => {
                  //@ts-ignore
                  return (
                    <PrismicNextImage
                      key={item.id}
                      field={item.diningimage1}
                      className="rounded-2xl w-1/3 object-cover h-[353px] xl:h-[706px]"
                    />
                  );
                })}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="diningtab2">
            <div className="flex flex-col">
              <div className="flex flex-row py-8 w-full ">
                <PrismicNextImage
                  field={slice.primary.diningmainimage2}
                  className="w-1/2 h-auto object-cover"
                />
                <div className="flex flex-col bg-[#FFF6D9] w-1/2 min-h-fit p-12">
                  <Separator className="bg-[#947901]" />
                  <h2 className="text-xl font-semibold text-[#947901] py-2">
                    {slice.primary.diningname2}
                  </h2>
                  <Separator className="bg-[#947901]" />
                  <h2 className="text-xl font-semibold text-[#947901] p-10">
                    {slice.primary.diningdescription2}
                  </h2>
                  <Button className="bg-[#947901] rounded-3xl w-36 mx-10 ">
                    <PrismicNextLink field={slice.primary.diningbuttonlink2}>
                      <h2 className="text-xl font-bold text-white text-center">
                        {slice.primary.diningbuttontext2}
                      </h2>
                    </PrismicNextLink>
                  </Button>
                </div>
              </div>
              <div className="justify-between items-center flex flex-row gap-2">
                {slice.primary.diningimagestab2.map((item) => {
                  //@ts-ignore
                  return (
                    <PrismicNextImage
                      key={item.id}
                      field={item.diningimage1}
                      className="rounded-2xl w-1/3 object-cover h-[353px] xl:h-[706px]"
                    />
                  );
                })}
              </div>
            </div>
          </TabsContent>
          {/*<TabsContent value="diningtab3">*/}
          {/*  <div className="flex flex-col">*/}
          {/*    <div className="flex flex-row py-8 w-full ">*/}
          {/*      <PrismicNextImage*/}
          {/*        field={slice.primary.diningmainimage3}*/}
          {/*        className="w-1/2 h-auto object-cover"*/}
          {/*      />*/}
          {/*      <div className="flex flex-col bg-[#FFF6D9] w-1/2 min-h-fit p-12">*/}
          {/*        <Separator className="bg-[#947901]" />*/}
          {/*        <h2 className="text-xl font-semibold text-[#947901] py-2">*/}
          {/*          {slice.primary.diningname3}*/}
          {/*        </h2>*/}
          {/*        <Separator className="bg-[#947901]" />*/}
          {/*        <h2 className="text-xl font-semibold text-[#947901] p-10">*/}
          {/*          {slice.primary.diningdescription3}*/}
          {/*        </h2>*/}
          {/*        <Button className="bg-[#947901] rounded-3xl w-36 mx-10 ">*/}
          {/*          <PrismicNextLink field={slice.primary.diningbuttonlink3}>*/}
          {/*            <h2 className="text-xl font-bold text-white text-center">*/}
          {/*              {slice.primary.diningbuttontext3}*/}
          {/*            </h2>*/}
          {/*          </PrismicNextLink>*/}
          {/*        </Button>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="justify-between items-center flex flex-row gap-2">*/}
          {/*      {slice.primary.diningimagestab3.map((item) => {*/}
          {/*        //@ts-ignore*/}
          {/*        return (*/}
          {/*          <PrismicNextImage*/}
          {/*            key={item.id}*/}
          {/*            field={item.diningimage1}*/}
          {/*            className="rounded-2xl w-1/3 object-cover h-[353px] xl:h-[706px]"*/}
          {/*          />*/}
          {/*        );*/}
          {/*      })}*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</TabsContent>*/}
        </Tabs>
      </div>
    </section>
  );
};

export default Dining;

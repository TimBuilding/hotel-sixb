import {ArrowRight, Facebook, Instagram, Mail, MapPin, Phone} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#947901] pt-9 pb-10 flex flex-col items-center justify-center md:flex-row md:justify-between md:items-start md:px-28">
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold text-sm text-center md:text-2xl md:font-bold md:text-left">
            Contacts
          </h4>
          <div className="flex items-center md:flex-row justify-center md:items-start md:gap-5 flex-col text-white">
            <MapPin className="w-4 h-4 md:translate-y-1" />
            <span className="w-56 text-center md:text-left md:w-44">
              6B Isaac Tolentino Ave, Brgy. San Jose, Tagaytay City, Philippines
            </span>
          </div>
          <div className="flex items-center md:flex-row justify-center md:items-start md:gap-5 flex-col text-white">
            <Phone className="w-4 h-4 md:translate-y-1" />
            <span className="w-56 text-center md:text-left md:w-44">
              0917 122 0441
            </span>
          </div>
          <div className="flex items-center md:flex-row justify-center md:items-start md:gap-5 flex-col text-white">
            <Mail className="w-4 h-4 md:translate-y-1" />
            <span className="w-56 text-center md:text-left md:w-44">
              fo.tagaytayhotelsixb@gmail.com
            </span>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex flex-col gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-sm text-center md:text-2xl md:font-bold md:text-left">
              Subscribe
            </h4>
            <p className="text-white text-[15px] w-64 md:w-56 md:mt-5">
              Stay updated with our latest news and offers by subscribing to our
              Newsletter.
            </p>
          </div>
          <div className="relative">
            <Input className="shadow rounded-full w-64 shadow-zinc-400 shadow-inner md:-ml-1 placeholder:italic placeholder:text-zinc-300" placeholder="Email" />
            <Button
              className="rounded-full bg-[#6F5300] text-white absolute right-0 top-0"
              size={"icon"}
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex flex-row items-center justify-center md:justify-start md:pl-5 gap-6 pb-4 md:-ml-4">
            <Button  variant={"ghost"} className="group hover:bg-white hover:scale-105 hover:-translate-y-1 transition ease-in-out duration-300 bg-white rounded-full h-9 w-9">
              <Link
                href={"https://www.facebook.com/TagaytayHotelSixB"}
                target="_blank"
              >
                <Facebook className="text-[#947901] group-hover:scale-105 h-5 w-5 transition ease-in-out duration-300 "/>
              </Link>
            </Button>
            <Button variant={"ghost"} className="group hover:bg-white hover:scale-105 hover:-translate-y-1 transition ease-in-out duration-300 bg-white h-9 w-9">
              <Link
                href={"https://www.instagram.com/tagaytayhotelsixb/"}
                target="_blank"
              >
                <Instagram className="text-[#947901] group-hover:scale-105 transition ease-in-out duration-300 h-5 w-5"/>
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-auto h-full">
          <Image src={Logo} alt="Tagaytay Hotel SixB" width={191} height={38} className="brightness-200" />
        </div>
      </div>
      <div className="bg-[#774E17] w-full flex flex-row items-center justify-center py-2.5 md:justify-start">
        <p className="text-white text-xs uppercase max-w-5xl w-ful px-12">
          &copy; 2024 Tagaytay Hotel SixB. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

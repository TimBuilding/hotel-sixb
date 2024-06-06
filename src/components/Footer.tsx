import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import FacebookIcon from "@/assets/icons/facebook-icon";
import FooterFacebookIcon from "@/assets/icons/footer-facebook-icon";
import FooterInstagramIcon from "@/assets/icons/footer-instagram-icon";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#947901] pt-9 pb-10 flex flex-col items-center justify-center  gap-6">
        <h4 className="text-white font-bold text-sm">Contacts</h4>
        <div className="flex items-center justify-center flex-col text-white">
          <MapPin className="w-4 h-4" />
          <span className="w-56 text-center">
            6B Isaac Tolentino Ave, Brgy. San Jose, Tagaytay City, Philippines
          </span>
        </div>
        <div className="flex items-center justify-center flex-col text-white">
          <Phone className="w-4 h-4" />
          <span className="w-56 text-center">
            6B Isaac Tolentino Ave, Brgy. San Jose, Tagaytay City, Philippines
          </span>
        </div>
        <div className="flex items-center justify-center flex-col text-white">
          <Mail className="w-4 h-4" />
          <span className="w-56 text-center">
            6B Isaac Tolentino Ave, Brgy. San Jose, Tagaytay City, Philippines
          </span>
        </div>
        <div className="text-center">
          <h3 className="text-white font-bold text-sm">Subscribe</h3>
          <p className="text-white text-xs w-64">
            Stay updated with our latest news and offers by subscribing to our
            Newsletter.
          </p>
        </div>

        <div className="relative">
          <Input className="rounded-full w-64" placeholder="Email" />
          <Button
            className="rounded-full bg-[#6F5300] text-white absolute right-0 top-0"
            size={"icon"}
          >
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex flex-row items-center justify-center">
          <Button variant={"ghost"} size={"icon"}>
            <FooterFacebookIcon className="text-white" />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <FooterInstagramIcon className="text-white" />
          </Button>
        </div>
        <Image src={Logo} alt="Tagaytay Hotel SixB" width={191} height={38} />
      </div>
      <div className="bg-[#774E17] w-full flex flex-row items-center justify-center py-2.5">
        <p className="text-white text-xs uppercase">
          &copy; 2024 Tagaytay Hotel SixB. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

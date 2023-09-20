import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={twMerge(
        "w-full h-[6rem] left-0 p-[48px] bg-[#00202D] flex justify-between items-center",
        className
      )}
    >
      <div className="gap-64">
        <p className="text-white md:block hidden">
          &copy; 2023 LeagueOfEngineers All rights reserved.
        </p>
      </div>
      <div className="gap-4 flex">
        <Logo><img src="CSE_logo-01.png" alt="" className="h-16 w-full" /></Logo>
        <Logo><img src="jukti-01.png" alt="" className="h-16 w-full" /></Logo>
      </div>
    </footer>
  );
};

export default Footer;

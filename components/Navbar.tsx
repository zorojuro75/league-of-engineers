"use client";
import React, { useMemo, useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import NavbarItem from "./NavbarItem";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import MobileItem from "./MobileItem";

interface NavbarProps {
  children: React.ReactNode;
}
const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        label: "Registration",
        active: pathname === "/registration",
        href: "/registration",
      },
      {
        label: "Teams",
        active: pathname === "/teams",
        href: "/teams",
      },
      {
        label: "Auction",
        active: pathname === "/auction",
        href: "/auction",
      },
      {
        label: "Matches",
        active: pathname === "/matches",
        href: "/matches",
      },
    ],
    [pathname]
  );
  return (
    <div
      className="
      flex
      flex-col
      h-screen
      "
    >
      <div
        className="
        bg-background 
        flex 
        md:px-20 
        px-6
        justify-between
        "
      >
        <Logo>
          <img src="logo.png" alt="" className="md:h-16 w-full" />
        </Logo>
        {/* Expand button for mobile view */}
        <button
          className="md:hidden text-black focus:outline-none p-6"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ?(
            <RxCross2 size={26}/>
          ) : (
            <RxHamburgerMenu size={26}/>
          )}
        </button>
        <div
          className="
          hidden
          md:flex 
          gap-x-4 
          px-5 
          py-4
          bg-background
          "
        >
          {routes.map((item) => (
            <NavbarItem key={item.label} {...item} />
          ))}
        </div> 
      </div>
      <div>
        { expanded? (<div>
          {routes.map((item) => (
            <MobileItem key={item.label} {...item} />
          ))}
        </div>):(null)}
        </div>
      <main
        className="
        flex
        flex-col
        bg-white
        h-full
        "
      >
        {children}
      </main>
    </div>
  );
};

export default Navbar;

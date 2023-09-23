"use client";
import React, { useMemo, useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import NavbarItem from "./NavbarItem";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import MobileItem from "./MobileItem";
import Register from "./Register";

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
        label: "About",
        active: pathname === "/about",
        href: "/about",
      },
      {
        label: "Players",
        active: pathname === "/players",
        href: "/players",
      },
      {
        label: "Auction",
        active: pathname === "/auction",
        href: "/auction",
        clickable: "no",
      },
      {
        label: "Matches",
        active: pathname === "/matches",
        href: "/matches",
        clickable: "no",
      },
    ],
    [pathname]
  );
  return (
    <div
      className="
      bg-black bg-opacity-5
      flex
      flex-col
      "
    >
      <div
        className="
        flex 
        md:px-20 
        px-6
        justify-between
        bg-[#00212E]
        "
      >
        <Logo>
          <img src="league-logo-01.png" alt="" className="md:h-16 w-full" />
        </Logo>
        {/* Expand button for mobile view */}
        <button
          className="md:hidden text-white focus:outline-none p-6"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <RxCross2 size={26} /> : <RxHamburgerMenu size={26} />}
        </button>
        <div
          className="
          hidden
          md:flex 
          gap-x-[47px] 
          w-[512px] 
          py-4
          "
        >
          {routes.map((item) => (
            <NavbarItem key={item.label} {...item} />
          ))}
        </div>
        <Register className="w-[150px] h-[60px] rounded-[8px] md:flex hidden" />
      </div>
      <div>
        {expanded ? (
          <div className="absolute w-[100%] md:hidden bg-background">
            {routes.map((item) => (
              <MobileItem key={item.label} {...item}
              onClick={() => {
                setExpanded(false);
              }}
              />
            ))}
          </div>
        ) : null}
      </div>

      <main
        className="
        bg-white
        flex
        flex-col
        h-full
        "
      >
        {children}
      </main>
    </div>
  );
};

export default Navbar;

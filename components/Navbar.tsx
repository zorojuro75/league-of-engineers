"use client";
import React, { useMemo, useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import NavbarItem from "./NavbarItem";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import MobileItem from "./MobileItem";
import Register from "./Register";
import { twMerge } from "tailwind-merge";

interface NavbarProps {
  children: React.ReactNode;
  className?: string
}
const Navbar: React.FC<NavbarProps> = ({ children, className }) => {
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
      },
      {
        label: "Group",
        active: pathname === "/groups",
        href: "/groups",
      },
    ],
    [pathname]
  );
  return (
    <div
    className={twMerge(
      "flex flex-col",
      className
    )}
    >
      <div className=" grow-0
        flex 
        md:px-20 
        px-6
        justify-between
        bg-[#00212E]
        sticky top-0
        z-10
        "
      >
        <Logo>
          <img src="League-logo.png" alt="" className="md:h-16 w-full" />
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
      <div className="grow-0 z-10">
        {expanded ? (
          <div className="fixed inset w-full  md:hidden bg-background">
            {routes.map((item) => (
              <MobileItem
                key={item.label}
                {...item}
                onClick={() => {
                  setExpanded(false);
                }}
              />
            ))}
          </div>
        ) : null}
      </div>

      <main className="grow-1
        flex-1
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

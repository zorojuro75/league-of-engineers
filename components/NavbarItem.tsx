import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface NavbarItemProps {
  label: string;
  active?: boolean;
  href: string;
  clickable?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active, href, clickable }) => {
  return (
    <>
    {
      clickable=='no'?<div
      className={twMerge(
        `
        flex 
        flex-row 
        items-center 
        w-full 
        gap-x-4 
        cursor-pointer
        transition
        text-white
        py-1`,
        active && "text-primary font-semibold"
      )}
    >
      {/* <p className="truncate w-100 hidden md:block text-[25px]">{label}</p> */}
      <div className="truncate text-gray-600 w-100 hidden md:block text-[20px]">
        <p className={twMerge(active && "border-b-[2px]")}>{label}</p>
      </div>
    </div>:
    <Link
      href={href}
      className={twMerge(
        `
        flex 
        flex-row 
        items-center 
        w-full 
        gap-x-4 
        cursor-pointer
        transition
        text-white
        py-1`,
        active && "text-primary font-semibold"
      )}
    >
      {/* <p className="truncate w-100 hidden md:block text-[25px]">{label}</p> */}
      <div className="truncate text-white w-100 hidden md:block text-[20px]">
        <p className={twMerge(active && "border-b-[2px]")}>{label}</p>
      </div>
    </Link>
    }
    
    </>
  );
};

export default NavbarItem;

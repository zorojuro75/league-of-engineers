import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
interface BoxProps {
  label: string;
  active?: boolean;
  href: string;
}

const Box: React.FC<BoxProps> = ({ label, active, href }) => {
  return (
    <Link href={href}>
      <div
        className={twMerge(
          "border-2 rounded-lg py-3 px-20 bg-primary text-white border-#46585d hover:bg-secondary",
          active && "border-blue-900 border-2"
        )}
      >
        {label}
      </div>
    </Link>
  );
};

export default Box;

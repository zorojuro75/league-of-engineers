import React from "react";
import { twMerge } from "tailwind-merge";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const Register = ({
  className
}) => {
  return (
    <Link
      href="registration"
      className={twMerge(`border-1 gap-2 px-2 rounded text-black my-6 bg-button hidden md:flex items-center`,className)}
    >
      <div className="text-xl font-bold">Register</div>
      <BsArrowUpRight fontSize={24} />
    </Link>
  );
};

export default Register;

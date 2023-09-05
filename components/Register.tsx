import React from "react";
import { twMerge } from "tailwind-merge";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
type ButtonProps = {
  className?: string
}
const Register = (
  { className }: ButtonProps
) => {
  return (
    <Link
      href="registration"
      className={twMerge(`border-2 border-black rounded text-black my-6 bg-[#E3A02B] hidden md:flex items-center justify-center`,className)}
    >
      <div className="text-[20px] font-semibold">Register</div>
      <BsArrowUpRight fontSize={20} />
    </Link>
  );
};

export default Register;

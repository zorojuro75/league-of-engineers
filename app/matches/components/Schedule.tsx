"use client";
import React, { useMemo } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Box from "./Box";
import { usePathname } from "next/navigation";
interface ScheduleProps {
  children: React.ReactNode;
}
const Schedule: React.FC<ScheduleProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "23 July",
        active: pathname === "/matches",
        href: "/matches",
      },
      {
        label: "24 July",
        active: pathname === "/24july",
        href: "/24july",
      },
      {
        label: "25 July",
        active: pathname === "/25july",
        href: "/25july",
      },
      {
        label: "26 July",
        active: pathname === "/26july",
        href: "/26july",
      },
      {
        label: "27 august",
        active: pathname === "/27july",
        href: "/27july",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex justify-around py-4">
      {routes.map((item) => (
        <Box key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Schedule;

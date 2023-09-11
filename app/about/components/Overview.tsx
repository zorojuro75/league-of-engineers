"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
const Overview = () => {
  return (
    <div className="flex mx-[96px] py-[96px] px-[32px] h-[693px]">
      <div className="w-[50%] gap-[32px]">
        <div className="h-[105px]">
          <h1 className="text-[48px]">Season 1</h1>
          <h1 className="text-[16px]">At a glance</h1>
        </div>
        <div className="h-[364px]">
          In its inaugural season, the League of Engineers ignited a blaze of
          passion and competition among the students of SETS Engineering
          Department. With sixteen spirited teams taking to the field, Season 1
          marked a vibrant fusion of engineering prowess and athletic energy.
          From exhilarating goals to strategic moves, each match painted a
          unique story of determination and camaraderie. As players and managers
          embraced the virtual coin-based auction to craft their squads, the
          season not only showcased exceptional football skills but also
          underlined the collaborative spirit that defines the department. With
          Season 1&apos;s resounding success, the League of Engineers solidified its
          status as a platform that celebrates the multidimensional talents of
          tomorrow&apos;s engineers.
        </div>
      </div>
      <div className="w-[50%]">
        <Carousel>
            <img 
              src="/204.jpg"
              alt="no images found"
              className="h-full w-full object-cover"
            />
            <img
              src="/204.jpg"
              alt="no images found 2"
              className="h-full w-full object-cover"
            />
        </Carousel>
      </div>
    </div>
  );
};

export default Overview;

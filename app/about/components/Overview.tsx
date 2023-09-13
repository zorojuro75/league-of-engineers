"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import supabase from "@/config/supabase";

const Overview = () => {
  const [fetchError, setFetchError] = useState<any>(null);
  const [imgData, setImgData] = useState<any>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const { data, error } = await supabase.from("carouselImg").select("*");
      if (error) {
        setFetchError("Could not fetch the data");
        setImgData(null);
        console.log(error);
      }

      if (data) {
        setImgData(data);
        setFetchError(null);
      }
    };
    fetchImage();
  }, []);

  return (
    <div className="md:flex md:mx-[96px] md:py-[96px] py-[20px] md:px-[32px] mx-[20px] md:h-[693px]">
      <div className="md:w-[50%] md:gap-[32px]">
        <div className="md:h-[105px]">
          <h1 className="text-[48px]">Season 1</h1>
          <h1 className="text-[16px]">At a glance</h1>
        </div>
        <div className="md:h-[364px] text-justify">
          In its inaugural season, the League of Engineers ignited a blaze of
          passion and competition among the students of SETS Engineering
          Department. With sixteen spirited teams taking to the field, Season 1
          marked a vibrant fusion of engineering prowess and athletic energy.
          From exhilarating goals to strategic moves, each match painted a
          unique story of determination and camaraderie. As players and managers
          embraced the virtual coin-based auction to craft their squads, the
          season not only showcased exceptional football skills but also
          underlined the collaborative spirit that defines the department. With
          Season 1&apos;s resounding success, the League of Engineers solidified
          its status as a platform that celebrates the multidimensional talents
          of tomorrow&apos;s engineers.
        </div>
      </div>
      <div className="md:w-[50%] my-[32px] md:my-0 md:px-[100px]">
        {imgData && (
          <Swiper
          modules={[Pagination, Autoplay]}
          pagination
          autoplay={{delay:3000}} slidesPerView={1} className="h-[300px]">
            {imgData.map((data: any) => (
              <SwiperSlide key={data.id}>
                <Image src={data.image} alt="" width={500} height={0} className="mx-auto z-0"/>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Overview;

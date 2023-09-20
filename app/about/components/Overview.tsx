"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
          League of Engineers Season 1 was a great football event. 16 teams from
          the School of Engineering, Technology, and Science (SETS) played. It
          was fun and exciting. After the first round, only eight teams got to
          the quarter-finals. There were cool games like Team Butterfly vs
          Spartans FC, FC101 vs Fanatic FC, Logic Legions vs AC Mavericks, and
          FC400 vs Floppy Disk. The semi-finals were close games, with Spartans
          FC playing against FC101 and Logic Legions playing against Floppy
          Disk. In the final match, FC101 and Floppy Disk played. Floppy Disk
          won and became the champions. FC101 did a great job and came second.
          We also gave awards to some players. Sayed Hossain Sikdar was the
          Player of the Finale. Shafayat Hossain Hridoy scored the most goals
          and got the Top Scorer award. Md Rubaut was the Best Keeper. And Sayed
          Hossain Sikdar was also the Most Valuable Player. Every player did a
          great job in the tournament. We&apos;re also thankful for our team and
          volunteers who helped make everything run well. We all had a great
          time and enjoyed football!
        </div>
      </div>
      <div className="md:w-[50%] my-[32px] md:my-0 md:px-[100px]">
        {imgData && (
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            className="h-[300px]"
          >
            {imgData.map((data: any) => (
              <SwiperSlide key={data.id}>
                <Image
                  src={data.image}
                  alt=""
                  width={500}
                  height={0}
                  className="mx-auto z-0"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Overview;

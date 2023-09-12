"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";
import type { CarouselProps } from "@material-tailwind/react";
import supabase from "@/config/supabase";


const Overview = () => {
  const [fetchError, setFetchError] = useState<any>(null)
  const [imgData, setImgData] = useState<any>(null)

  useEffect(()=>{
    const fetchImage = async() => {
      const {data, error } = await supabase.from('carouselImg').select("*")
      if(error){
        setFetchError('Could not fetch the data')
        setImgData(null)
        console.log(error)
      }

      if(data){
        setImgData(data)
        setFetchError(null)
      }
    }
    fetchImage()
  },[])


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
          Season 1&apos;s resounding success, the League of Engineers solidified its
          status as a platform that celebrates the multidimensional talents of
          tomorrow&apos;s engineers.
        </div>
      </div>
      <div className="md:w-[50%] my-[32px] md:my-0">
        {imgData && (
          <Carousel
          className="rounded-xl md:h-[380px] h-[200px]"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="orange"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-[-12px] -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="orange"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-[-12px] -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          autoplay
        >
    
            {imgData.map((data:any) => (
              <Image
                src={data.image}
                alt=""
                key={data.id}
                width={300}
                height={0}
                className="md:ms-[100px] ms-[26px] border-2 border-black "
              />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Overview;

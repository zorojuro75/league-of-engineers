import React from "react";

const AboutSection = () => {
  return (
    <div className="md:flex flex-col items-center">
      <div className="md:h-[561px] md:w-[1260px] px-[32px] md:py-[96px]">
        <div className="text-center text-5xl font-semibold mt-[12px]">
          About League of Engineers
        </div>
        <div className="text-center text-[20px] text-gray-500 font-normal mt-[24px]">
          Learn more about the tournament and it has to offer.
        </div>
        <div className="md:text-center text-justify md:mt-[64px] mt-[32px] md:text-2xl text-xl">
          Prepare for a football spectacle like no other! The &apos;League of
          Engineers&apos; tournament brings together 16 dynamic teams from
          within the SETS Engineering Department, igniting the spirit of
          friendly rivalry and teamwork. As the field becomes a canvas for
          skillful plays and strategic maneuvers, this event celebrates the
          seamless integration of engineering intellect and athletic prowess,
          perfectly mirroring the department&apos;s commitment to all-round
          excellence.
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

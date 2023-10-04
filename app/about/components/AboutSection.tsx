import React from "react";

const AboutSection = () => {
  return (
    <div className="md:flex flex-col items-center">
      <div className=" md:w-[1260px] px-[32px] md:py-[96px]">
        <div className="text-center text-5xl font-semibold mt-[12px]">
          About League of SETS
        </div>
        <div className="text-center text-[20px] text-gray-500 font-normal mt-[24px]">
          Learn more about the tournament and it has to offer.
        </div>
        <div className="md:text-center text-justify md:mt-[64px] mt-[32px] md:text-2xl text-xl">
          The League of SETS is an exciting initiative designed for students within the School of Engineering, Technology, and Sciences (SETS). Its primary purpose is to unite students who share a common passion for football. Whether you&apos;re a seasoned player or a newcomer to the sport, the league welcomes everyone. In the League of SETS, students register individually, and teams are thoughtfully crafted. This ensures a dynamic mix of talent and experience on each team, fostering an environment of inclusivity and teamwork. Beyond the competition on the field, the league aims to promote sportsmanship, build lasting friendships, and create memorable experiences during your time at SETS. This vibrant community of football enthusiasts not only celebrates the love for the game but also provides a platform for personal growth and connection
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import Register from "@/components/Register";
import React from "react";

const Ready = () => {
  return (
    <div className="md:flex flex-col justify-between items-center md:px-[120px] mx-[20px] md:h-[140px] ">
      <div className="md:h-[82px] md:w-[865px]">
        <h1 className="text-[32px] font-semibold ">Ready to play?</h1>
        <p className="text-[#667085] font-normal text-[20px]">
          Register now to become a part of the League of Engineers tournament as
          a player.
        </p>
      </div>
      <Register className="w-[300px] h-[82px] border-2 rounded-[8px] mx-auto" />
    </div>
  );
};

export default Ready;

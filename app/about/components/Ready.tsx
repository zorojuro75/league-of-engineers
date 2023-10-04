import Register from "@/components/Register";
import React from "react";

const Ready = () => {
  return (
    <div className="md:flex justify-between items-center md:px-[120px] mx-[20px] md:h-[140px] ">
      <div className="md:h-[82px] md:w-[865px]">
        <h1 className="text-[32px] font-semibold ">Ready to play?</h1>
        <p className="text-[#667085] font-normal text-[20px]">
          Register now to become a part of the League of SETS tournament as
          a player.
        </p>
      </div>
      <Register className="md:w-[300px] md:h-[82px] md:border-2 md:rounded-[8px] mx-auto w-[202px] h-[60px] gap-[10px] py-[8px] px-[15px]" />
    </div>
  );
};

export default Ready;

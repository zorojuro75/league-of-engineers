import React from "react";
import Team from "./components/Team";
type TeamInfo = {
  id: number;
  teamName: string;
  teamAmount: number;
  teamGender: string;
  teamManager: string;
};
type Props = {};

const page = (props: Props) => {
  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col my-10 gap-5">
      {/* <h1 className='text-5xl text-cyan-900 text-center my-10 font-bold'>Teams</h1>
      <div className='grid grid-cols-4 gap-20 h-full'>
        <Team/>
      </div> */}
      <div className="w-full bg-white shadow-xl h-[400px] rounded-lg flex">
        <div className="w-1/3 h-full p-5 text-center">
          <div className="text-5xl font-bold">Arsenal</div>
          <div></div>
        </div>
        <div className="border-r border-gray-400 my-[20px]"></div>
        <div className="h-full grow p-5 text-2xl">
          <div className="flex justify-around">
            <div className="text-center">
              <div className="font-bold">Available League Points</div>
              <div>500</div>
            </div>
            <div className="text-center">
              <div className="font-bold">Next Affordable Max Bid</div>
              <div>500</div>
            </div>
            <div className="text-center">
              <div className="font-bold">Number of Players Bought</div>
              <div>500</div>
            </div>
          </div>
          <div className="my-8 text-center font-bold">Minimum Squad Requirements</div>
          <div className="flex justify-around  text-lg text-center">
            <div className="p-5 border border-black rounded-full h-[100px] w-[100px] flex items-center justify-center">
              1 Icon
            </div>
            <div className="p-5 text-lg border border-black rounded-full h-[100px] w-[100px] flex items-center justify-center">
              1 category A
            </div>
            <div className="p-5 border border-black rounded-full h-[100px] w-[100px] flex items-center justify-center">
              1 category B
            </div>
            <div className="p-5 border border-black rounded-full h-[100px] w-[100px] flex items-center justify-center">
              1 category C
            </div>
            <div className="p-5 border border-black rounded-full h-[100px] w-[100px] flex items-center justify-center">
              7 Players
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

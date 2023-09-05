import React from "react";
import Rules from "./Rules";
import { MdManageAccounts } from "react-icons/md";
import { GiBabyfootPlayers, GiSoccerField } from "react-icons/gi";
import { RiAuctionFill } from "react-icons/ri";
const TournamentRules = () => {
  return (
    <div className="flex flex-col items-center my-[96px]">
      <div className="h-[124px] w-[1280px] px-[32px] flex flex-col items-center">
        <div className="w-[768px]">
          <div className="text-center text-[36px] font-semibold">
            How the tournament works
          </div>
          <div className="text-gray-500 text-xl text-center pt-[20px]">
            Get a closer look at the tournament's framework and understand the
            step-by-step process that drives the League of Engineers event.
          </div>
        </div>
      </div>
      <div className="h-[404px] w-[1280px] px-[32px] mt-[64px]">
        <div className="flex gap-[32px] mb-[64px]">
          <Rules icon={MdManageAccounts} title={'Team Management'} description={'Seeking 16 adept leaders to guide each team, with faculty members stepping into the role of managers.'} />
          <Rules icon={GiBabyfootPlayers} title={'Player Registration'} description={"Own your journey! Individually register for the tournament and gear up to showcase your skills on the grand stage of the 'League of Engineers'. "} />
        </div>
        <div className="flex gap-[32px]">
        <Rules icon={GiSoccerField} title={'Team Formation'} description={"Calling all managers to the bidding table! Craft your dream team through an exciting auction process and set the stage on fire in the 'League of Engineers' tournament."} />
        <Rules icon={RiAuctionFill} title={'Auction Process'} description={"It's time to bid and build! Managers' first picks become icon players, teaming up with faculty to gather the remaining team members using virtual coins."} />
        </div>
      </div>
    </div>
  );
};

export default TournamentRules;

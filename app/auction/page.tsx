"use client";
import React, { useEffect, useState } from "react";
import AuctionRules from "./components/auctionRules";
import supabase from "@/config/supabase";
import Teams from "./components/Teams";
import {useSearchParams } from "next/navigation";
import Link from "next/link";
type Team = {
  id: number;
  teamName: string;
  teamAmount: number;
  teamGender: string;
  teamManager: string;
  maxBid: number;
};
const Auction = () => {
  const search = useSearchParams();
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string | null>(null);
  let selectedTab = search.get('tab')
  useEffect(() => {
    async function fetchTeams() {
      try {
        const { data, error } = await supabase.from("Team").select();

        if (error) {
          setError(error.message);
        } else {
          const sortedTeams = data.sort((a, b) => a.id - b.id);
          setTeams(sortedTeams);
        }
      } catch (e) {
        setError("An unexpected error occurred.");
        console.error("An unexpected error occurred:", e);
      }
    }
    fetchTeams();
    
  }, []);
  return (
    <>
    <div className="max-w-7xl mx-auto my-5">
    <div className="bg-[#00212E] shadow-lg rounded-xl h-[60px] md:w-[600px] flex items-center text-2xl text-white mb-10 cursor-pointer">
      <Link
        href={`?tab=Rules`}
        className={`${
          selectedTab === "Rules" ? "bg-[#E3A02B]" : ""
        } h-full w-1/2 flex items-center justify-center rounded-s-lg`}
      >
        Auction Rules
      </Link>
      <Link
      href={`?tab=Updates`}
        className={`${
           selectedTab !== "Rules" ? "bg-[#E3A02B]" : ""
        } h-full w-1/2 flex items-center justify-center rounded-e-lg`}
      >
        Auction Update
      </Link>
    </div>
    </div>
    {selectedTab=="Rules"?<AuctionRules/>:
    <div className="max-w-7xl mx-auto grid grid-cols-5 text-center text-xs md:text-lg rounded shadow-xl bg-white my-10 gap-10 p-10 overflow-hidden">
        <div className="md:text-xl font-semibold text-center">Team Name</div>
        <div className="md:text-xl font-semibold text-center">Manager Name</div>
        <div className="md:text-xl font-semibold text-center">Available LP</div>
        <div className="md:text-xl font-semibold text-center">Maximum Bid</div>
        <div className="md:text-xl font-semibold text-center">No. of Players</div>
        {teams
          ? teams.map((team) => (
              <React.Fragment key={team.id}>
                <Teams teams={team} />
              </React.Fragment>
            ))
          : null}
      </div>

    }
      
      
    </>
  );
};

export default Auction;

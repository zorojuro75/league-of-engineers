"use client";
import React, { useEffect, useState } from "react";
import AuctionRules from "./components/auctionRules";
import supabase from "@/config/supabase";
import Teams from "./components/Teams";
import ToggleButton from "./components/ToggleButton";
type Team = {
  id: number;
  teamName: string;
  teamAmount: number;
  teamGender: string;
  teamManager: string;
};
const Auction = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [tabs, setTabs] = useState<string>("Rules");
  useEffect(() => {
    async function fetchPlayers() {
      try {
        const { data, error } = await supabase.from("Team").select();

        if (error) {
          setError(error.message);
        } else {
          setTeams(data || []);
        }
      } catch (e) {
        setError("An unexpected error occurred.");
        console.error("An unexpected error occurred:", e);
      }
    }

    fetchPlayers();
  }, [teams, setTeams]);
  return (
    <>
    <div className="max-w-7xl mx-auto my-5">
    <ToggleButton setTabs={setTabs} selectedTab={tabs}/>
    </div>
    {tabs=="Rules"?<AuctionRules/>:
    <div className="max-w-7xl mx-auto grid grid-cols-5 text-lg rounded shadow-xl bg-white my-10 gap-10 text-center p-10 overflow-auto">
        <div className="text-xl font-semibold">Team Name</div>
        <div className="text-xl font-semibold">Manager Name</div>
        <div className="text-xl font-semibold">Available LP</div>
        <div className="text-xl font-semibold">Maximum Bid</div>
        <div className="text-xl font-semibold">No. of Players</div>
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

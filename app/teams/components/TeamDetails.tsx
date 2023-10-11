"use client";
import PlayerCard from "@/app/players/components/PlayerCard";
import supabase from "@/config/supabase";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PlayerInfo from "./PlayerInfo";
type TeamInfo = {
  id: number;
  teamName: string;
  teamAmount: number;
  teamGender: string;
  teamManager: string;
  maxBid: number;
};

type PlayerInfo = {
  teamID: number;
  playerID: number;
  playerPrice: number;
};

const TeamDetails = () => {
  const [team, setTeam] = useState<TeamInfo | null>(null);
  const [players, setPlayers] = useState<PlayerInfo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  let totalSpend = 0;
  const search = useSearchParams();
  const teamName = search.get("teamName");

  useEffect(() => {
    async function fetchTeamInfo() {
      try {
        const { data, error } = await supabase
          .from("Team")
          .select()
          .eq("teamName", teamName);
        if (error) {
          setError(error.message);
        } else {
          if (data && data.length > 0) {
            setTeam(data[0] as TeamInfo);
          }
        }
      } catch (e) {
        setError("An unexpected error occurred.");
        console.error("An unexpected error occurred:", e);
      }
    }

    async function fetchPlayerIds() {
      try {
        const { data, error } = await supabase
          .from("TeamPlayer")
          .select()
          .eq("teamID", team?.id);
        if (error) {
          setError(error.message);
        } else {
          if (data) {
            setPlayers(data);
          }
        }
      } catch (e) {
        setError("An unexpected error occurred while fetching player IDs.");
        console.error("An unexpected error occurred:", e);
      }
    }

    fetchTeamInfo();
    fetchPlayerIds();
  }, [teamName, team, setTeam]);
  players?.forEach((player) => {
    totalSpend += player.playerPrice;
  });
  return (
    <>
      <div className="mx-5 md:w-full bg-white shadow-xl md:h-[400px] rounded-lg md:flex">
        <div className="md:w-1/3 h-full p-5 text-center">
          <div className="text-5xl font-bold">{teamName}</div>
          <div>{team?.teamManager}</div>
        </div>
        <div className="border-r border-gray-400 my-[20px]"></div>
        <div className="h-full grow p-5 text-2xl">
          <div className="md:flex justify-around">
            <div className="text-center">
              <div className="font-bold">Available League Points</div>
              <div>{5000 - totalSpend}</div>
            </div>
            <div className="text-center">
              <div className="font-bold">Next Affordable Max Bid</div>
              <div>{team?.maxBid}</div>
            </div>
            <div className="text-center">
              <div className="font-bold">Number of Players Bought</div>
              <div>{players ? players.length : 0}</div>
            </div>
          </div>
          <div className="my-8 text-center font-bold">
            Minimum Squad Requirements
          </div>
          <div className="grid md:grid-cols-5 grid-cols-1 text-lg text-center place-items-center">
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
      <div className="md:w-full mx-5 bg-white shadow-xl rounded-lg grid md:grid-cols-8 grid-cols-1 place-items-center py-10">
        <div className="md:col-span-8 text-3xl text-center font-bold my-5">Squad</div>
        {players
          ? players.map((player) => (
              <PlayerInfo key={player.playerID} playerID={player.playerID} />
            ))
          : null}
          {players
          ? players.map((player) => (
              <PlayerInfo key={player.playerID} playerID={player.playerID} />
            ))
          : null}
          {players
          ? players.map((player) => (
              <PlayerInfo key={player.playerID} playerID={player.playerID} />
            ))
          : null}
          {players
          ? players.map((player) => (
              <PlayerInfo key={player.playerID} playerID={player.playerID} />
            ))
          : null}
      </div>
    </>
  );
};

export default TeamDetails;

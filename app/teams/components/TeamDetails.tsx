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
type Manager = {
  id: number;
  managerName: string;
  email: string;
  image: string;
  department: string;
  position: string;
  rating: string;
  isPlayer: boolean;
};
type PlayerInfo = {
  teamID: number;
  playerID: number;
  playerPrice: number;
};
type Player = {
  id: number;
  name: string;
  email: string;
  pastTour: string;
  image: string;
  transaction: number;
  created: Date;
  department: string;
  position: string;
  bloodGroup: string;
  rating: string;
  paymentVia: string;
  verified: boolean;
};
const TeamDetails = () => {
  const [team, setTeam] = useState<TeamInfo | null>(null);
  const [manager, setManager] = useState<Manager | null>(null);
  const [players, setPlayers] = useState<PlayerInfo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [iconBG, setIconBG] = useState<string>("bg-red-400");
  const [ABG, setABG] = useState<string>("bg-red-400");
  const [BBG, setBBG] = useState<string>("bg-red-400");
  const [CBG, setCBG] = useState<string>("bg-red-400");
  const [availableLP, setAvailableLP] = useState<number>(5000);
  const [totalPlayer, setTotalPlayer] = useState<number>(0);
  const [playerBG, setPlayerBG] = useState<string>("bg-red-400");
  const [currPlayer, setPlayer] = useState<Player | null>(null);
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
    async function fetchManagerInfo() {
      try {
        const { data, error } = await supabase
          .from("Manager")
          .select()
          .eq("managerName", team?.teamManager);
        if (error) {
          setError(error.message);
        } else {
          if (data && data.length > 0) {
            setManager(data[0] as Manager);
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
            const sortedPlayers = data.sort((a, b) => a.playerID - b.playerID);
            setPlayers(sortedPlayers);
          }
        }
      } catch (e) {
        setError("An unexpected error occurred while fetching player IDs.");
        console.error("An unexpected error occurred:", e);
      }
    }

    fetchTeamInfo();
    fetchManagerInfo();
    fetchPlayerIds();
  }, [teamName, team, setTeam]);
  useEffect(() => {
    let totalSpend = 0;
    let icon = 0;
    let cateA = 0;
    let cateB = 0;
    let cateC = 0;
    if (manager?.isPlayer == true) {
      totalSpend += 600;
      cateA += 1;
    }
    players?.forEach((player) => {
      totalSpend += player.playerPrice;

      async function fetchPlayer(playerId: number) {
        try {
          const { data, error } = await supabase
            .from("formPlayer")
            .select()
            .eq("id", playerId);
          if (error) {
            setError(error.message);
          } else {
            if (data) {
              // Update the player state for the specific player
              setPlayer(data[0] as Player);
            }
          }
        } catch (e) {
          setError("An unexpected error occurred while fetching player IDs.");
          console.error("An unexpected error occurred:", e);
        }
      }

      // Call the fetchPlayer function for the current player
      fetchPlayer(player.playerID);
      if (currPlayer?.rating == "Icon") {
        icon += 1;
      } else if (currPlayer?.rating == "A") {
        cateA += 1;
      } else if (currPlayer?.rating == "B") {
        cateB += 1;
      } else if (currPlayer?.rating == "C") {
        cateC += 1;
      }
    });
    if (icon >= 1) {
      setIconBG("bg-green-400");
    }
    if (cateA >= 1) {
      setABG("bg-green-400");
    }
    if (cateB >= 1) {
      setBBG("bg-green-400");
    }
    if (cateC >= 1) {
      setCBG("bg-green-400");
    }
    setTotalPlayer(cateA + cateB + cateC + icon);
    if (totalPlayer >= 7) {
      setPlayerBG("bg-green-400");
    }
    setAvailableLP(5000 - totalSpend);
  }, [players]);
  return (
    <>
      <div className="mx-5 md:w-full bg-white shadow-xl md:h-[400px] rounded-lg md:flex">
        <div className="md:w-1/3 h-full p-5 text-center flex flex-col items-center justify-center gap-2">
          <div className="text-5xl font-bold">{teamName}</div>
          <img
            src={manager?.image}
            alt=""
            className="h-48 w-48 bg-blue-gray-50 rounded border-4 border-gray-600"
          />
          <div>{team?.teamManager}</div>
          <div>Manager</div>
        </div>
        <div className="border-r border-gray-400 my-[20px]"></div>
        <div className="h-full grow p-5 text-2xl">
          <div className="md:flex justify-around">
            <div className="text-center bg-blue-gray-50 rounded m-2 p-2">
              <div className="font-bold">Available League Points</div>
              <div className="border-b border-gray-700 mx-5 mb-2"></div>
              <div className="text-blue-400 font-semibold flex justify-center items-center">
                {availableLP}
                <img src="favicon.png" className="h-6 w-6" />
              </div>
            </div>
            <div className="text-center bg-blue-gray-50 rounded m-2 p-2">
              <div className="font-bold">Next Affordable Max Bid</div>
              <div className="border-b border-gray-700 mx-5 mb-2"></div>
              <div className="text-blue-400 font-semibold flex justify-center items-center">
                {team?.maxBid}
                <img src="favicon.png" className="h-6 w-6" />
              </div>
            </div>
            <div className="text-center bg-blue-gray-50 rounded m-2 p-2">
              <div className="font-bold">Number of Players Bought</div>
              <div className="border-b border-gray-700 mx-5 mb-2"></div>
              <div className="text-blue-400 font-semibold">{totalPlayer}</div>
            </div>
          </div>
          <div className="my-8 text-center font-bold">
            Minimum Squad Requirements
          </div>
          <div className="grid md:grid-cols-5 grid-cols-2 text-lg text-center place-items-center gap-y-5">
            <div
              className={`p-5 border border-black rounded-full h-[100px] w-[100px] flex items-center justify-center ${iconBG}`}
            >
              1 Icon
            </div>
            <div
              className={`p-5 border border-black rounded-full h-[100px] w-[100px] flex items-center justify-center ${ABG}`}
            >
              1 category A
            </div>
            <div
              className={`p-5 border border-black rounded-full h-[100px] w-[100px] flex items-center justify-center ${BBG}`}
            >
              1 category B
            </div>
            <div
              className={`p-5 border border-black rounded-full h-[100px] w-[100px] flex items-center justify-center ${CBG}`}
            >
              1 category C
            </div>
            <div
              className={`p-5 border border-black rounded-full h-[100px] w-[100px] flex items-center justify-center ${playerBG}`}
            >
              7 Players
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-full mx-5 bg-white shadow-xl rounded-lg grid md:grid-cols-8 grid-cols-1 place-items-center py-10 px-5">
        <div className="md:col-span-8 text-3xl text-center font-bold my-5">
          Squad
        </div>
        {players
          ? players.map((player) => (
              <PlayerInfo
                key={player.playerID}
                playerID={player.playerID}
                price={player.playerPrice}
              />
            ))
          : null}
        {manager?.isPlayer ? (
          <div className="flex flex-col items-center justify-center text-sm md:bg-white bg-blue-gray-50 md:w-auto w-[200px] py-5 my-2 rounded shadow-2xl md:shadow-none md:py-0 md:my-0">
            <img
              className="object-center object-cover rounded-full h-28 w-28"
              src={manager.image}
              alt="photo"
            />
            <div className="font-bold h-10 text-center flex items-center">
              {manager.managerName}
            </div>
            <div className="text-center">{manager.position}</div>
            <div className="text-center">{manager.department}</div>
            <div className="text-center">{manager.rating}</div>
            <div className="text-center flex items-center justify-center">
              {600}
              <img src="favicon.png" className="h-6 w-6" />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default TeamDetails;

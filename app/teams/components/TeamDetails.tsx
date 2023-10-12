"use client";
import PlayerCard from "@/app/players/components/PlayerCard";
import supabase from "@/config/supabase";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PlayerInfo from "./PlayerInfo";
type Props = {
  teamName:string;
};
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
const TeamDetails = (props: Props) => {
  const teamName = props.teamName;

  useEffect(() => {
  }, []);
  return (
    <>
      <div className="mx-5 md:w-full bg-white shadow-xl md:h-[400px] rounded-lg md:flex">
        <div className="md:w-1/3 h-full p-5 text-center flex flex-col items-center justify-center gap-2">
          <div className="text-5xl font-bold">{teamName}</div>
          <img
            src={''}
            alt=""
            className="h-48 w-48 bg-blue-gray-50 rounded border-4 border-gray-600"
          />
          <div>{}</div>
          <div>Manager</div>
        </div>
      </div>
      <div className="md:w-full mx-5 bg-white shadow-xl rounded-lg grid md:grid-cols-8 grid-cols-1 place-items-center py-10 px-5">
        <div className="md:col-span-8 text-3xl text-center font-bold my-5">
          Squad
        </div>
        {/* {players
          ? players.map((player) => (
              <PlayerInfo
                key={player.playerID}
                playerID={player.playerID}
                price={player.playerPrice}
              />
            ))
          : null} */}
      </div>
    </>
  );
};

export default TeamDetails;

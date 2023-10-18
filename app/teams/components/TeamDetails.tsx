"use client";
import PlayerCard from "@/app/players/components/PlayerCard";
import supabase from "@/config/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PlayerInfo from "./PlayerInfo";
import Link from "next/link";
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

  const [managerInfo, setManagerInfo] = useState<Manager | null>(null);

  useEffect(() => {
    // Fetch managerInfo by joining Team and Manager tables
    async function fetchManagerInfo() {
      try {
        const { data, error } = await supabase
          .from("Team")
          .select("teamManager")
          .eq("teamName", teamName)
          .single();
        
        if (error) {
          console.error("Error fetching team manager:", error);
          return;
        }

        const managerName = data?.teamManager;

        if (managerName) {
          const { data: managerData, error: managerError } = await supabase
            .from("Manager")
            .select()
            .eq("managerName", managerName)
            .single();

          if (managerError) {
            console.error("Error fetching manager info:", managerError);
          } else {
            setManagerInfo(managerData);
          }
        }
      } catch (error) {
        console.error("Error fetching manager info:", error);
      }
    }

    fetchManagerInfo();
  }, [teamName]);

  return (
    <>
      <div className="mx-5 md:w-full bg-white shadow-xl py-5 rounded-lg md:flex">
        <div className="md:w-1/3 h-auto p-5 text-center flex flex-col items-center justify-center gap-2">
          <Link href={`?${teamName}`} className="text-4xl font-bold my-2">{teamName}</Link>
          <img
            src={managerInfo?.image}
            alt=""
            className="h-48 w-48 bg-blue-gray-50 rounded border-4 border-gray-600"
          />
          <div>{managerInfo?.managerName}</div>
          <div>Manager</div>
        </div>
        <div>
          <div className="text-center text-3xl font-bold m-5">Squad</div>
        <PlayerInfo teamName={teamName}/>
        </div>
      </div>
      
    </>
  );
};

export default TeamDetails;

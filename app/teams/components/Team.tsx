"use client";
import supabase from "@/config/supabase";
import Link from "next/link";
import React, { useEffect, useState } from "react";
type Props = {};
type Team = {
  teamID: number;
  teamName: String;
  played: number;
  won: number;
  lost: number;
  scored: number;
  drawn: number;
  conceded: number;
  difference: number;
  points: number;
};

const Team = (props: Props) => {
  const [teams, setTeams] = useState<Team[]>([]);
  useEffect(()=>{
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("TeamTable").select("*");
        if (error) {
          throw error;
        } else {
          setTeams(data);
        }
      } catch (error) {
        console.log("error");
      }
    }
    fetchData();
  },[])
  
  return (
    <>
      {teams.map((team) => (
        <div className="flex items-center gap-x-5" key={team.teamID}>
          <div className="logo h-[64px] w-[64px] border-2 border-orange-500 bg-blue-900 rounded grow-0 shrink-0"></div>
          <div className="teamName text-xl break-words h-full grow overflow-auto flex items-center">{team.teamName}</div>
        </div>
      ))}
    </>
  );
};

export default Team;

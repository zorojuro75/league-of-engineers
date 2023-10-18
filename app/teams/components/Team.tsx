"use client";
import supabase from "@/config/supabase";
import React, { useEffect, useState } from "react";
type Props = {
  teamName: string;
};
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
  const [team, setTeam] = useState<Team>();
  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("Team")
          .select("*")
          .eq("teamName", props.teamName)
          .single();
        if (error) {
          throw error;
        } else {
          setTeam(data);
        }
      } catch (error) {
        console.log("error");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {team ? (
        <div className="w-max-7xl gap-10 flex rounded bg-white">
        <div className="w-[30%] flex flex-col gap-y-5 p-5">
          <div className="text-3xl">{props.teamName}</div>
          <div className="grid grid-cols-2 place-items-center text-xl">
          <div className="w-[130px] h-[130px] rounded-full border border-red-500 flex flex-col items-center justify-center text-center">
            <div className="text-xl font-bold">2</div>
            <div>Matches Played</div>
          </div>
          <div>
            <div className="border-b"> <span className="font-bold">{1}</span> Win</div>
            <div className="border-b"> <span className="font-bold">{2}</span> Drawn</div>
            <div> <span className="font-bold">{3}</span> Lost</div>
          </div>
          </div>
        </div>
        <div className="w-[70%]"> stat</div>
        </div>
      ) : <div>fetch not working</div> }
    </>
  );
};

export default Team;

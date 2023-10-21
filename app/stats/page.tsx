"use client";
import supabase from "@/config/supabase";
import React, { useEffect, useState } from "react";
import { StringLiteral } from "typescript";
type Goal = {
  name: string;
  teamName: string;
  goal: number;
};
type Assist = {
  name: string;
  teamName: string;
  assist: number;
};
type Props = {};

const Page = (props: Props) => {
  const [topScorers, setTopScorers] = useState<Goal[]>([]);
  const [topAssists, setTopAssits] = useState<Assist[]>([]);

  useEffect(() => {
    // Fetch the top 5 goal scorers from the playerTable.
    async function fetchTopScorers() {
      const { data, error } = await supabase
        .from("PlayerTable")
        .select("*")
        .order("goal", { ascending: false })
        .limit(5);

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        setTopScorers(data || []);
      }
    }
    async function fetchTopAssists() {
      const { data, error } = await supabase
        .from("PlayerTable")
        .select("*")
        .order("assist", { ascending: false })
        .limit(5);

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        setTopAssits(data || []);
      }
    }

    fetchTopAssists();
    fetchTopScorers();
  }, []);
  return (
    <div className="max-w-7xl w-full my-10 mx-auto">
      <div className="text-3xl font-bold mx-5 md:mx-0">League of SETS Season 2 Stats</div>
      <div className="max-w-3xl my-5 bg-blue-700 bg-opacity-80 rounded-md shadow-sm text-white mx-5 md:mx-0">
        <div className="px-10 flex w-full justify-between items-center border-b">
          <div>
            <div className="text-2xl text-white font-bold h-[80px] flex items-center">
              Goals
            </div>
            <div className="h-[100px] flex flex-col gap-5">
              <div className="text-5xl font-bold ">87</div>
              <div className=" ">Total Goals</div>
            </div>
          </div>
          <div>
            <img src="net.svg" alt="" className="w-[150px]" />
          </div>
        </div>
        <div className="px-10 flex w-full gap-x-16 items-center py-5 ">
          <div>
            <div className="text-3xl font-bold">2.49</div>
            <div>Goals per game</div>
          </div>
          <div>
            <div className="text-3xl font-bold">12.07&apos;</div>
            <div>Minutes per goal</div>
          </div>
        </div>
      </div>
      <div className="text-3xl font-bold mx-5 md:mx-0">Player Stats</div>
      <div className="md:flex gap-5 mx-5 md:mx-0">
        <div className=" max-w-3xl my-5 bg-blue-700 bg-opacity-80 rounded-md shadow-sm text-white">
          <div className="text-3xl text-center pt-5">Top Goal scorers</div>
          <div className="grid grid-cols-4 gap-5 p-5">
            {topScorers.map((player, index) => (
              <React.Fragment key={index}>
                <div>{index + 1}</div>
                <div className="col-span-2 text-left">
                  <div>{player.name}</div>
                  <div className="text-gray-400 text-sm">{player.teamName}</div>
                </div>
                <div className="text-right">{player.goal}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className=" max-w-3xl my-5 bg-blue-700 bg-opacity-80 rounded-md shadow-sm text-white">
          <div className="text-3xl text-center pt-5">Top Assist Providers</div>
          <div className="grid grid-cols-4 gap-5 p-5">
            {topAssists.map((player, index) => (
              <React.Fragment key={index}>
                <div>{index + 1}</div>
                <div className="col-span-2 text-left">
                  <div>{player.name}</div>
                  <div className="text-gray-400 text-sm">{player.teamName}</div>
                </div>
                <div className="text-right">{player.assist}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* <div className=" max-w-3xl my-5 bg-blue-700 bg-opacity-80 rounded-md shadow-sm text-white">
          <div className="text-3xl text-center pt-5">Top Clean Sheet keeper</div>
          <div className="grid grid-cols-4 gap-5 p-5">
            {topScorers.map((player, index) => (
              <React.Fragment key={index}>
                <div>{index + 1}</div>
                <div className="col-span-2 text-left">
                  <div>{player.name}</div>
                  <div className="text-gray-400 text-sm">{player.teamName}</div>
                </div>
                <div className="text-right">{player.goal}</div>
              </React.Fragment>
            ))}
          </div>
        </div> */}
      </div>

    </div>
  );
};

export default Page;

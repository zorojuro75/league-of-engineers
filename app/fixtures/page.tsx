"use client";
import supabase from "@/config/supabase";
import React, { useEffect, useState } from "react";

type Props = {};
type Fixture = {
  matchID: number;
  homeTeam: string;
  awayTeam: string;
  matchDay: string;
  matchDate: string;
  matchTime: string;
  homeGoal: string;
  awayGoal: string;
};
const Page = (props: Props) => {
  const [error, setError] = useState<string | null>(null);
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  useEffect(() => {
    async function fetchFixtures() {
      try {
        const { data, error } = await supabase.from("Fixture").select();

        if (error) {
          setError(error.message);
        } else {
          data.sort((a, b) => {
            const dateComparison = a.matchDate.localeCompare(b.matchDate);
            if (dateComparison === 0) {
              return a.matchTime.localeCompare(b.matchTime);
            }
            return dateComparison;
          });
    
          setFixtures(data || []);
        }
      } catch (e) {
        setError("An unexpected error occurred.");
        console.error("An unexpected error occurred:", e);
      }
    }
    fetchFixtures();
  });
  return (
    <div className="w-max-7xl shadow-xl bg-white mx-auto grid md:grid-cols-2 grid-cols-1 place-content-between gap-x-20 gap-y-5 p-10 rounded-lg my-10 text-sm md:text-lg">
      {fixtures
        ? fixtures.map((match) => (
            <div
              key={match.matchID}
              className="md:w-[450px] bg-gray-50 flex items-center px-10 py-2"
            >
              <div className="flex justify-between w-[65%] px-2">
                <div>
                  <div>{match.homeTeam}</div>
                  <div>{match.awayTeam}</div>
                </div>
                <div>
                  <div>{match.homeGoal}</div>
                  <div>{match.awayGoal}</div>
                </div>
              </div>
              <div className="border-s border-black border-opacity-40 ps-5">
                <div>{match.matchDate}</div>
                <div>{match.matchTime}</div>
                <div>{match.matchDay}</div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Page;

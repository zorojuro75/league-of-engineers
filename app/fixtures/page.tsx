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
  homeGoalT: string;
  awayGoal: string;
  awayGoalT: string;
  groupName: string;
  played: boolean;
};
const Page = (props: Props) => {
  const [error, setError] = useState<string | null>(null);
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [fixturesQF, setFixturesQF] = useState<Fixture[]>([]);
  const [fixturesSF, setFixturesSF] = useState<Fixture[]>([]);
  useEffect(() => {
    async function fetchFixtures() {
      try {
        const { data, error } = await supabase.from("Fixture").select();

        if (error) {
          setError(error.message);
        } else {
          data.sort((a, b) => {
            if (a.played === b.played) {
              const dateComparison = a.matchDate.localeCompare(b.matchDate);
              if (dateComparison === 0) {
                return a.matchTime.localeCompare(b.matchTime);
              }
              return dateComparison;
            } else {
              return a.played ? 1 : -1;
            }
          });

          setFixtures(data || []);
        }
      } catch (e) {
        setError("An unexpected error occurred.");
        console.error("An unexpected error occurred:", e);
      }
    }
    async function fetchFixturesQF() {
      try {
        const { data, error } = await supabase.from("Fixture_QF").select();

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

          setFixturesQF(data || []);
        }
      } catch (e) {
        setError("An unexpected error occurred.");
        console.error("An unexpected error occurred:", e);
      }
    }
    async function fetchFixturesSF() {
      try {
        const { data, error } = await supabase.from("Fixture_SF").select();

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

          setFixturesSF(data || []);
        }
      } catch (e) {
        setError("An unexpected error occurred.");
        console.error("An unexpected error occurred:", e);
      }
    }
    fetchFixtures();
    fetchFixturesQF();
    fetchFixturesSF();
  });
  return (
    <>
      <div className="w-max-7xl shadow-xl bg-white mx-auto grid md:grid-cols-2 grid-cols-1 place-content-between gap-x-20 gap-y-5 p-10 rounded-lg my-10 text-sm md:text-lg">
        <div className="md:col-span-2 text-center text-3xl font-bold">
          Group Stage
        </div>
        {fixtures
          ? fixtures.map((match) => (
              <div
                key={match.matchID}
                className={`md:w-[450px] flex items-center px-2 md:px-10 py-2 ${
                  match.groupName === "A"
                    ? "bg-green-500 bg-opacity-20"
                    : match.groupName === "B"
                    ? "bg-blue-500 bg-opacity-20"
                    : match.groupName === "C"
                    ? "bg-yellow-500 bg-opacity-20"
                    : match.groupName === "D"
                    ? "bg-red-500 bg-opacity-20"
                    : "bg-purple-500 bg-opacity-20"
                }`}
              >
                <div className="flex justify-between md:w-[65%] w-[60%] px-2 bg-group-color">
                  <div>
                    <div>{match.homeTeam}</div>
                    <div>{match.awayTeam}</div>
                  </div>
                  <div>
                    <div>{match.homeGoal}</div>
                    <div>{match.awayGoal}</div>
                  </div>
                </div>
                {match.played != true ? (
                  <div className="border-s border-black border-opacity-40 md:ps-5 ps-1">
                    <div>{match.matchDate}</div>
                    <div>{match.matchTime}</div>
                    <div>{match.matchDay}</div>
                  </div>
                ) : (
                  <div className="border-s border-black border-opacity-40 md:ps-5 ps-1">
                    Full Time
                  </div>
                )}
              </div>
            ))
          : null}
      </div>
      {fixturesQF.length != 0 ? (
        <div className="w-max-7xl shadow-xl bg-white mx-auto grid md:grid-cols-2 grid-cols-1 place-content-between gap-x-20 gap-y-5 p-10 rounded-lg my-10 text-sm md:text-lg">
          <div className="md:col-span-2 text-center text-3xl font-bold">
            Quarter Final
          </div>
          {fixturesQF.map((match) => (
            <div
              key={match.matchID}
              className={`md:w-[450px] flex items-center px-2 md:px-10 py-2 ${
                match.groupName === "A"
                  ? "bg-green-500 bg-opacity-20"
                  : match.groupName === "B"
                  ? "bg-blue-500 bg-opacity-20"
                  : match.groupName === "C"
                  ? "bg-yellow-500 bg-opacity-20"
                  : match.groupName === "D"
                  ? "bg-red-500 bg-opacity-20"
                  : "bg-purple-500 bg-opacity-20"
              }`}
            >
              <div className="flex justify-between md:w-[65%] w-[60%] px-2 bg-group-color">
                <div>
                  <div>{match.homeTeam}</div>
                  <div>{match.awayTeam}</div>
                </div>
                <div>
                  <div>{match.homeGoal}{match.played==true && match.homeGoal==match.awayGoal?<>({match.homeGoalT})</>:<></>}</div>
                  <div>{match.awayGoal}{match.played==true && match.homeGoal==match.awayGoal?<>({match.awayGoalT})</>:<></>}</div>
                </div>
              </div>
              <div className="border-s border-black border-opacity-40 md:ps-5 ps-1">
                <div>{match.matchDate}</div>
                <div>{match.matchTime}</div>
                <div>{match.matchDay}</div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {fixturesSF.length != 0 ? (
        <div className="w-max-7xl shadow-xl bg-white mx-auto grid md:grid-cols-2 grid-cols-1 place-content-between gap-x-20 gap-y-5 p-10 rounded-lg my-10 text-sm md:text-lg">
          <div className="md:col-span-2 text-center text-3xl font-bold">
            Semi Final
          </div>
          {fixturesSF.map((match) => (
            <div
              key={match.matchID}
              className={`md:w-[450px] flex items-center px-2 md:px-10 py-2 ${
                match.groupName === "A"
                  ? "bg-green-500 bg-opacity-20"
                  : match.groupName === "B"
                  ? "bg-blue-500 bg-opacity-20"
                  : match.groupName === "C"
                  ? "bg-yellow-500 bg-opacity-20"
                  : match.groupName === "D"
                  ? "bg-red-500 bg-opacity-20"
                  : "bg-purple-500 bg-opacity-20"
              }`}
            >
              <div className="flex justify-between md:w-[65%] w-[60%] px-2 bg-group-color">
                <div>
                  <div>{match.homeTeam}</div>
                  <div>{match.awayTeam}</div>
                </div>
                <div>
                  <div>{match.homeGoal}{match.played==true && match.homeGoal==match.awayGoal?<>({match.homeGoalT})</>:<></>}</div>
                  <div>{match.awayGoal}{match.played==true && match.homeGoal==match.awayGoal?<>({match.awayGoalT})</>:<></>}</div>
                </div>
              </div>
              {match.played != true ? (
                <div className="border-s border-black border-opacity-40 md:ps-5 ps-1">
                  <div>{match.matchDate}</div>
                  <div>{match.matchTime}</div>
                  <div>{match.matchDay}</div>
                </div>
              ) : (
                <div className="border-s border-black border-opacity-40 md:ps-5 ps-1">
                  FT
                </div>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Page;

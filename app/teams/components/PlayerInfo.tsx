"use client";
import supabase from "@/config/supabase";
import React, { useEffect, useState } from "react";

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
  rating: number;
  paymentVia: string;
  verified: boolean;
  teamName: string;
};
type PlayerGaol = {
  id: number;
  name: string;
  teamName: string;
  goal: number;
  assist: number;
};

type Props = {
  teamName: string;
};

const PlayerInfo = (props: Props) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [playersGoal, setPlayersGoal] = useState<PlayerGaol[]>([]);

  useEffect(() => {
    // Fetch players based on teamName
    async function fetchPlayersInfo() {
      try {
        const { data, error } = await supabase
          .from("formPlayer")
          .select()
          .eq("teamName", props.teamName);

        if (error) {
          console.error("Error fetching player info:", error);
          return;
        }

        setPlayers(data || []);
      } catch (error) {
        console.error("Error fetching player info:", error);
      }
    }

    async function fetchPlayerGoals() {
      try {
        const { data, error } = await supabase
          .from("PlayerTable")
          .select()
          .eq("teamName", props.teamName);

        if (error) {
          console.error("Error fetching player goals:", error);
          return;
        }

        setPlayersGoal(data || []);
      } catch (error) {
        console.error("Error fetching player goals:", error);
      }
    }

    fetchPlayersInfo();
    fetchPlayerGoals();
  }, [props.teamName]);

  return (
    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-3 place-items-center">
      {players
        ? players.map((player) => {
            const playerGoals = playersGoal.filter((goal) => goal.id === player.id);
            const totalGoals = playerGoals.reduce((total, goal) => total + goal.goal, 0);
            const totalAssists = playerGoals.reduce((total, goal) => total + goal.assist, 0);
            return (
              <div key={player.id} className="w-44 h-52 flex flex-col items-center text-center">
                <img src={player.image} alt="" className="h-16 w-16 border-2 rounded-full" />
                <div className="font-semibold">{player.name}</div>
                <div>{player.position}</div>
                <div>Goals: {totalGoals}</div>
                <div>Assists: {totalAssists}</div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default PlayerInfo;






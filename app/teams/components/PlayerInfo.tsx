'use client'
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

type Props = {
  teamName: string;
};

const PlayerInfo = (props: Props) => {
  const [players, setPlayers] = useState<Player[]>([]);

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

    fetchPlayersInfo();
  }, [props.teamName]);

  return (

    <div className="grid grid-cols-4 gap-10">
      {players?
      players.map((player)=>(
        <div key={player.id} className="h-36 w-36 flex flex-col items-center text-center">
        <img src={player.image} alt="" className="h-16 w-16 rounded-full" />
        <div className="font-semibold">{player.name}</div>
        <div>{player.position}</div>
      </div>
      )):null

      }
      

      {/* {players.map((player) => (
        <div
          key={player.id}
          className=""
        >
          <img
            className="object-center object-cover rounded-full h-36 w-36"
            src={player.image}
            alt="photo"
          />
          <div className="font-bold h-10 text-center flex items-center">
            {player.name}
          </div>
          <div className="text-center">{player.position}</div>
          <div className="text-center">{player.department}</div>
        </div>
      ))} */}
    </div>
  );
};

export default PlayerInfo;
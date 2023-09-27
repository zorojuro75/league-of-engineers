"use client";
import React, { useState, useEffect } from "react";
import PlayerCard from "./components/PlayerCard";
import supabase from "@/config/supabase";

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
};

const Page = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const { data, error } = await supabase
          .from("formPlayer")
          .select()
          .eq("verified", true); // Note: Assuming 'verified' is a boolean field

        if (error) {
          setError(error.message);
        } else {
          setPlayers(data || []);
        }
      } catch (e) {
        setError("An unexpected error occurred.");
        console.error("An unexpected error occurred:", e);
      }
    }

    fetchPlayers();
  }, [players, setPlayers]); 

  return (
    <>
      <div className="px-5">
        <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
              Meet Our Players
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-[8rem] gap-y-6">
            {players
              ? players.map((player) => (
                  <div key={player.id} className="w-full rounded-lg px-14 py-16 flex flex-col justify-center items-center bg-white shadow-2xl">
                    <PlayerCard  player={player} />
                  </div>
                ))
              : null}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

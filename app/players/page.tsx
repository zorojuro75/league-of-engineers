"use client";
import React, { useState, useEffect } from "react";
import PlayerCard from "./components/PlayerCard";
import Footer from "@/components/Footer";
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
  const [classname, setClassname] = useState<string>('');

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
    if(players.length<=3)setClassname("absolute bottom-0");
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <>
      <div className="mx-5">
        <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
              Meet Our Players
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-[8rem] gap-y-6">
            {players
              ? players.map((player) => (
                  <div key={player.id} className="w-full rounded-lg px-14 py-16 flex flex-col justify-center items-center bg-orange-100">
                    <PlayerCard  player={player} />
                  </div>
                ))
              : null}
          </div>
        </section>
      </div>
      <Footer className={classname}/>
    </>
  );
};

export default Page;

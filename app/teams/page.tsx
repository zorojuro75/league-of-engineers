'use client'
import React, { useEffect, useState } from "react";
import Team from "./components/Team";
import TeamDetails from "./components/TeamDetails";
import supabase from "@/config/supabase";
type Props = {};

const page = (props: Props) => {
  const [teams, setTeams] = useState<string[] | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const { data, error } = await supabase.from("Team").select("teamName");
        if (error) {
          setError(error.message);
        } else {
          setTeams(data?.map((team) => team.teamName) || []);
        }
      } catch (e) {
        setError("An unexpected error occurred while fetching team names.");
        console.error("An unexpected error occurred:", e);
      }
    }
    fetchTeam();
  }, []);
  return (
    <div className="md:max-w-7xl w-full md:mx-auto flex flex-col my-10 gap-5">
      {teams
        ? teams.map((team) => <TeamDetails key={team} teamName={team} />)
        : null}
    </div>
  );
};

export default page;

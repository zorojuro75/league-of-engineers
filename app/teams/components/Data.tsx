'use client'
import React, { useEffect, useState } from "react";
import TeamDetails from "./TeamDetails";
import supabase from "@/config/supabase";
type Props = {
  teamGender: string;
};

const Data = (props: Props) => {
  const [teams, setTeams] = useState<string[] | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const { data, error } = await supabase.from("Team").select("teamName").eq('teamGender', props.teamGender);
        if (error) {
          setError(error.message);
        } else {
          const sortedTeams = data
          ?.map((team) => team.teamName)
          .sort((a, b) => a.localeCompare(b));
        setTeams(sortedTeams);
        }
      } catch (e) {
        setError("An unexpected error occurred while fetching team names.");
        console.error("An unexpected error occurred:", e);
      }
    }
    fetchTeam();
  }, [props.teamGender]);
  return (
    <div className="md:max-w-7xl w-full md:mx-auto flex flex-col my-10 gap-5">
      {teams
        ? teams.map((team) => <TeamDetails key={team} teamName={team} />)
        : null}
    </div>
  );
};

export default Data;

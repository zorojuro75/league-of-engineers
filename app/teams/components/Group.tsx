"use client";
import supabase from "@/config/supabase";
import React, { useEffect, useState } from "react";
type Props = {};
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
const Group = (props: Props) => {
  const [fetchedTeams, setFetchedTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // Initialize the Supabase client with your Supabase URL and API key

    // Function to fetch team data from the Team table
    async function fetchTeamData() {
        try {
          const { data, error } = await supabase
            .from("TeamTable")
            .select('*')
  
          if (error) {
            setError(error.message);
          } else {
            setFetchedTeams(data || []);
          }
        } catch (e) {
          setError("An unexpected error occurred.");
          console.error("An unexpected error occurred:", e);
        }
      }

    // Call the fetchTeamData function to fetch data when the component mounts
    fetchTeamData();
    console.log(fetchedTeams.length)
  }, [fetchedTeams, setFetchedTeams]);

  let groups = [
    {
      group: "Group A",
      teams: ["Team 1", "Team 2", "Team 3", "Team 4"],
    },
    {
      group: "Group B",
      teams: ["Team 5", "Team 6", "Team 7", "Team 8"],
    },
    {
      group: "Group C",
      teams: ["Team 9", "Team 10", "Team 11", "Team 12"],
    },
    {
      group: "Group D",
      teams: ["Team 13", "Team 14", "Team 15", "Team 16"],
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      {groups.map((item) => (
        <div key={item.group} className="rounded px-5 py-2 bg-white shadow-sm">
          <div className="text-2xl font-semibold text-cyan-900">
            {item.group}
          </div>
          <div className="grid grid-cols-10 gap-y-2 text-center">
            <div className="col-span-2"></div>
            <div>Played</div>
            <div>Won</div>
            <div>Lost</div>
            <div>Drawn</div>
            <div>Scored</div>
            <div>Conceded</div>
            <div>Difference</div>
            <div>Points</div>
            {item.teams.map((teamName, index) => {
              // Find the corresponding team data
              const teamData = fetchedTeams.find(
                (data) => {
                    return data.teamName === teamName;
                    
                }
              );

              return (
                <React.Fragment key={index}>
                  <div className="text-xl text-gray-800 col-span-2">
                    {index + 1}.&nbsp; &nbsp;{teamData?.teamName}
                  </div>
                  <div className="text-xl text-gray-800">
                    {teamData ? teamData.played : 3}
                  </div>
                  <div className="text-xl text-gray-800">
                    {teamData ? teamData.won : 0}
                  </div>
                  <div className="text-xl text-gray-800">
                    {teamData ? teamData.lost : 0}
                  </div>
                  <div className="text-xl text-gray-800">
                    {teamData ? teamData.drawn : 0}
                  </div>
                  <div className="text-xl text-gray-800">
                    {teamData ? teamData.scored : 0}
                  </div>
                  <div className="text-xl text-gray-800">
                    {teamData ? teamData.conceded : 0}
                  </div>
                  <div className="text-xl text-gray-800">
                    {teamData ? teamData.difference : 0}
                  </div>
                  <div className="text-xl text-gray-800">
                    {teamData ? teamData.points : 0}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Group;

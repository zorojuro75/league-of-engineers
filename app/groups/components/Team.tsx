"use client";
import supabase from '@/config/supabase';
import Link from 'next/link';
import React, { useState } from 'react'
type Props = {
  groupID: number,
}
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
const Team = (props: Props) => {
  const [teams, setTeams] = useState<Team[]>([]);
  async function fetchData(groupID:number) {
    try{
      const {data, error} = await supabase.from('TeamTable').select('*').eq('groupID', groupID);
      if(error){
        throw error;
      }else{
        const sortedData = data.sort((a, b) => {
          if (b.points !== a.points) {
            return b.points - a.points;
          } else if (b.difference !== a.difference) {
            return b.difference - a.difference;
          } else if (b.scored !== a.scored) {
            return b.scored - a.scored;
          } else {
            return a.teamName.localeCompare(b.teamName);
          }
        });

        setTeams(sortedData);
      }
    }catch(error){
      console.log('error');
    }
  }
  fetchData(props.groupID);
  return (
    teams.map((team, index)=>(
      <React.Fragment key={team.teamID}>
                  <div
                   className="md:text-xl text-sm 0 col-span-2 cursor-pointer text-black">
                    {index < 2 ? `${team.teamName} (Q)` : team.teamName}
                  </div>
                  <div className="md:text-xl text-sm text-gray-800">
                    {team? team.played: 0}
                  </div>
                  <div className="md:text-xl text-sm text-gray-800">
                    {team ? team.won : 0}
                  </div>
                  <div className="md:text-xl text-sm text-gray-800">
                    {team ? team.lost : 0}
                  </div>
                  <div className="md:text-xl text-sm text-gray-800">
                    {team ? team.drawn : 0}
                  </div>
                  <div className="md:text-xl text-sm">
                    {team ? team.scored : 0}
                  </div>
                  <div className="md:text-xl text-sm text-gray-800">
                    {team ? team.conceded : 0}
                  </div>
                  <div className="md:text-xl text-sm text-gray-800">
                    {team ? team.difference : 0}
                  </div>
                  <div className="md:text-xl text-sm text-gray-800">
                    {team ? team.points : 0}
                  </div>
                </React.Fragment>
    ))
  )
}

export default Team;
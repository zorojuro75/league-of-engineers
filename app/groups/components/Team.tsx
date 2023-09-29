"use client";
import supabase from '@/config/supabase';
import Link from 'next/link';
import React, { useState } from 'react'
type Props = {
  groupName: String,
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
  async function fetchData(groupName:String) {
    try{
      const {data, error} = await supabase.from('TeamTable').select('*').eq('groupName', groupName);
      if(error){
        throw error;
      }else{
        const sortedData = data.sort((a, b) => {
          if (b.points !== a.points) {
            return b.points - a.points;
          } else if (b.difference !== a.difference) {
            return b.difference - a.difference;
          }
          return b.scored - a.scored;
        });

        setTeams(sortedData);
      }
    }catch(error){
      console.log('error');
    }
  }
  fetchData(props.groupName);
  return (
    teams.map((team)=>(
      <React.Fragment key={team.teamID}>
                  <Link href={`/teams`}
                   className="text-xl text-gray-800 md:col-span-2 cursor-pointer">
                    {team.teamName}
                  </Link>
                  <div className="text-xl text-gray-800">
                    {team? team.played: 0}
                  </div>
                  <div className="text-xl text-gray-800">
                    {team ? team.won : 0}
                  </div>
                  <div className="text-xl text-gray-800">
                    {team ? team.lost : 0}
                  </div>
                  <div className="text-xl text-gray-800">
                    {team ? team.drawn : 0}
                  </div>
                  <div className="text-xl text-gray-800 hidden md:block">
                    {team ? team.scored : 0}
                  </div>
                  <div className="text-xl text-gray-800 hidden md:block">
                    {team ? team.conceded : 0}
                  </div>
                  <div className="text-xl text-gray-800 hidden md:block">
                    {team ? team.difference : 0}
                  </div>
                  <div className="text-xl text-gray-800">
                    {team ? team.points : 0}
                  </div>
                </React.Fragment>
    ))
  )
}

export default Team;
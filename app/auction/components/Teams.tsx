'use client'
import supabase from "@/config/supabase";
import Link from "next/link";
import React, {useEffect, useState} from "react";
type TeamInfo = {
  id: number;
  teamName: string;
  teamAmount: number;
  teamGender: string;
  teamManager: string;
  maxBid: number;
};
type PlayerInfo = {
  teamID: number;
  playerID: number;
  playerPrice: number;
};
type Team = {
  id: number;
  teamName: string;
  teamAmount: number;
  teamGender: string;
  teamManager: string;
  maxBid: number;
};
type Manager = {
  id: number;
  managerName: string;
  email: string;
  image: string;
  department: string;
  position: string;
  rating: string;
  isPlayer: boolean;
};
type Props = {
  teams: Team;
};

const Teams = (props: Props) => {
  const [team, setTeam] = useState<TeamInfo | null>(null);
  const [players, setPlayers] = useState<PlayerInfo[] | null>(null);
  const [manager, setManager] = useState<Manager | null>(null);
  const [totalPlayer, setTotalPlayer] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchManagerInfo() {
      try {
        const { data, error } = await supabase
          .from("Manager")
          .select()
          .eq("managerName", team?.teamManager);
        if (error) {
          setError(error.message);
        } else {
          if (data && data.length > 0) {
            setManager(data[0] as Manager);
          }
        }
      } catch (e) {
        setError("An unexpected error occurred.");
        console.error("An unexpected error occurred:", e);
      }
    }
    async function fetchTeamInfo() {
      try {
        const { data, error } = await supabase
          .from("Team")
          .select()
          .eq("teamName", props.teams.teamName);
        if (error) {
          setError(error.message);
        } else {
          if (data && data.length > 0) {
            setTeam(data[0] as TeamInfo);
          }
        }
      } catch (e) {
        setError("An unexpected error occurred.");
        console.error("An unexpected error occurred:", e);
      }
    }

    async function fetchPlayerIds() {
      try {
        const { data, error } = await supabase
          .from("TeamPlayer")
          .select()
          .eq("teamID", team?.id);
        if (error) {
          setError(error.message);
        } else {
          if (data) {
            const sortedPlayers = data.sort((a, b) => a.playerID - b.playerID);
            setPlayers(sortedPlayers);
          }
        }
      } catch (e) {
        setError("An unexpected error occurred while fetching player IDs.");
        console.error("An unexpected error occurred:", e);
      }
    }

    fetchTeamInfo();
    fetchPlayerIds();
    fetchManagerInfo();
    if(manager?.isPlayer==true){
      setTotalPlayer((players?.length || 0)+1)
    }
    else {
      setTotalPlayer((players?.length || 0))
    }
  }, [props.teams.teamName, team, setTeam]);
  return (
    < >
      <Link href={`/teams?teamName=${props.teams.teamName}`}  className="px-2">{props.teams.teamName}</Link>
      <div className="px-2">{props.teams.teamManager}</div>
      <div className="px-2">{props.teams.teamAmount}</div>
      <div className="px-2">{props.teams.maxBid}</div>
      <div className="px-2">{totalPlayer}</div>
    </>
  );
};

export default Teams;

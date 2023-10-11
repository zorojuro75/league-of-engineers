import Link from "next/link";
import React from "react";
type Team = {
  id: number;
  teamName: string;
  teamAmount: number;
  teamGender: string;
  teamManager: string;
};
type Props = {
  teams: Team;
};

const Teams = (props: Props) => {
  return (
    < >
      <Link href={`/teams?teamName=${props.teams.teamName}`}  className=" px-2">{props.teams.teamName}</Link>
      <div className=" px-2">{props.teams.teamManager}</div>
      <div className=" px-2">{props.teams.teamAmount}</div>
      <div className=" px-2">{props.teams.teamAmount}</div>
      <div className=" px-2">{props.teams.teamName}</div>
    </>
  );
};

export default Teams;

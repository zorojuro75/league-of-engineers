import React from 'react'
type Team = {
    id: number,
    teamName: string,
    teamAmount: number,
    teamGender: string,
    teamManager: string
  
  }
type Props = {
    teams: Team,
}

const Teams = (props: Props) => {
  return (
    <>
    <div className=" px-2">{props.teams.teamName}</div>
      <div className=" px-2">{props.teams.teamManager}</div>
      <div className=" px-2">{props.teams.teamAmount}</div>
      <div className=" px-2">{props.teams.teamAmount}</div>
      <div className=" px-2">{props.teams.teamName}</div>
    </>
  )
}

export default Teams
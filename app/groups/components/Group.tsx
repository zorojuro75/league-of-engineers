"use client";
import supabase from "@/config/supabase";
import React, { useState } from "react";
import Team from "./Team";
type Props = {};

type Group = {
  groupID:number,
  groupName: String,
}
const Group = (props: Props) => {
  const [groups, setGroups] = useState<Group[]>([]);
  async function fetchData() {
    try {
      const { data: tableData, error } = await supabase
        .from('Group')
        .select('*'); 

      if (error) {
        throw error;
      }

      setGroups(tableData);
    } catch (error) {
      console.error('Error fetching data:');
    }
  }
  fetchData();
  return (
    <div className="flex flex-col gap-10">
      {groups?.map((group) => (
        <div key={group.groupID} className="rounded px-5 py-2 bg-white shadow-sm">
          <div className="text-2xl font-semibold text-cyan-900 text-center py-2">
            {group.groupName}
          </div>
          <div className="grid md:grid-cols-10 grid-cols-6 gap-y-2 text-center">
            <div className="md:col-span-2"></div>
            <div>Played</div>
            <div>Won</div>
            <div>Lost</div>
            <div>Drawn</div>
            <div className="hidden md:block">Scored</div>
            <div className="hidden md:block">Conceded</div>
            <div className="hidden md:block">Difference</div>
            <div>Points</div>
            <div className="md:col-span-10 col-span-6 border-b border-gray-400"></div>
            <Team groupID={group.groupID}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Group;

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
        <div key={group.groupID} className={`rounded px-5 py-2  shadow-sm ${
          group.groupName === "Group A" ? "bg-green-500 bg-opacity-20" : group.groupName === "Group B"? "bg-blue-500 bg-opacity-20":group.groupName === "Group C"? "bg-yellow-500 bg-opacity-20": group.groupName === "Group D"? "bg-red-500 bg-opacity-20": "bg-purple-500 bg-opacity-20"
        }`}>
          <div className="text-2xl font-semibold text-cyan-900 text-center py-2">
            {group.groupName}
          </div>
          <div className="grid grid-cols-10 gap-y-2 text-center md:text-xl text-sm place-items-center">
            <div className="col-span-2"></div>
            <div>P</div>
            <div>W</div>
            <div>L</div>
            <div>D</div>
            <div >GS</div>
            <div >GC</div>
            <div >GD</div>
            <div>Points</div>
            <div className="col-span-10 border-b border-gray-400"></div>
            <Team groupID={group.groupID}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Group;

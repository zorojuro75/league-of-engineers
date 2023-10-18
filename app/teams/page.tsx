"use client";
import React, { useState } from "react";
import Data from "./components/Data";
import ToggleButton from "./components/ToggleButton";
import { useSearchParams } from "next/navigation";
import Team from "./components/Team";
type Props = {};

const Page = (props: Props) => {
  const [tabs, setTabs] = useState<string>("Male");
  const search = useSearchParams();
  const gender = search.get("gender");

  return (
    <div className="md:max-w-7xl w-full md:mx-auto flex flex-col my-10 gap-5">
      <ToggleButton setTabs={setTabs} selectedTab={tabs} />
      {gender ? <Data teamGender={gender} /> : <></>}
      {/* <Team teamName="Team-4"/> */}
    </div>
  );
};

export default Page;

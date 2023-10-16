"use client";
import React, { useState } from "react";
import Data from "./components/Data";
import ToggleButton from "./components/ToggleButton";
import { useSearchParams } from "next/navigation";
type Props = {};

const Page = (props: Props) => {
  const [tabs, setTabs] = useState<string>("Male");
  const search = useSearchParams();
  const tab = search.get("tab");

  return (
    <div className="md:max-w-7xl w-full md:mx-auto flex flex-col my-10 gap-5">
      <ToggleButton setTabs={setTabs} selectedTab={tabs} />
      {tab ? <Data teamGender={tab} /> : <></>}
    </div>
  );
};

export default Page;

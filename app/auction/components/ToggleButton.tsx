import React from "react";

type Props = {
  selectedTab: string;
  setTabs: (newTab: string) => void;
};

const ToggleButton = (props: Props) => {
  return (
    <div className="bg-[#00212E] shadow-lg rounded-xl h-[60px] md:w-[600px] flex items-center text-2xl text-white mb-10 cursor-pointer">
      <div
        onClick={() => props.setTabs("Rules")}
        className={`${
          props.selectedTab === "Rules" ? "bg-[#E3A02B]" : ""
        } h-full w-1/2 flex items-center justify-center rounded-s-lg`}
      >
        Auction Rules
      </div>
      <div
        onClick={() => props.setTabs("Updates")}
        className={`${
          props.selectedTab === "Updates" ? "bg-[#E3A02B]" : ""
        } h-full w-1/2 flex items-center justify-center rounded-e-lg`}
      >
        Auction Update
      </div>
    </div>
  );
};

export default ToggleButton;

import React from "react";

type Props = {
  selectedTab: string;
  setTabs: (newTab: string) => void;
};

const ToggleButton = (props: Props) => {
  return (
    <div className="bg-[#00212E] shadow-lg rounded-xl h-[60px] w-full flex items-center text-2xl text-white mb-10 cursor-pointer">
      <div
        onClick={() => props.setTabs("Male")}
        className={`${
          props.selectedTab === "Male" ? "bg-[#E3A02B]" : ""
        } h-full w-1/2 flex items-center justify-center rounded-s-lg`}
      >
        Male
      </div>
      <div
        onClick={() => props.setTabs("Female")}
        className={`${
          props.selectedTab === "Female" ? "bg-[#E3A02B]" : ""
        } h-full w-1/2 flex items-center justify-center border-x`}
      >
        Female
      </div>
    </div>
  );
};

export default ToggleButton;

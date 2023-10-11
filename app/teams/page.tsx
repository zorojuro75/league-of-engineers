import React from "react";
import Team from "./components/Team";
import TeamDetails from "./components/TeamDetails";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="md:max-w-7xl w-full md:mx-auto flex flex-col my-10 gap-5">
      {/* <h1 className='text-5xl text-cyan-900 text-center my-10 font-bold'>Teams</h1>
      <div className='grid grid-cols-4 gap-20 h-full'>
        <Team/>
      </div> */}
      <TeamDetails/>
    </div>
  );
};

export default page;

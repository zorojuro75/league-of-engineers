import React from "react";

type Player = {
  id: number;
  name: string;
  email: string;
  pastTour: string;
  image: string;
  transaction: number;
  created: Date;
  department: string;
  position: string;
  bloodGroup: string;
  rating: number;
  paymentVia: string;
  verified: boolean;
};

type PlayerCardProps = {
  player: Player;
};

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <>
      <div className="mb-8">
        <img
          className="object-center object-cover rounded-full h-40 w-40"
          src={player.image}
          alt="photo"
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-gray-800 font-bold mb-2">{player.name}</p>
        <p className="text-lg text-gray-700 font-bold">{player.id}</p>
        <p className="text-md text-gray-600 font-semibold">{player.position}</p>
        <p className="text-md text-gray-600 font-semibold">{player.department}</p>
      </div>
    </>
  );
};

export default PlayerCard;

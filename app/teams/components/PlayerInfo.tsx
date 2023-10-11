import supabase from '@/config/supabase';
import React, { useEffect, useState } from 'react'
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
type Props = {
    playerID: number
}

const PlayerInfo = (props: Props) => {
    const [error, setError] = useState<string | null>(null)
    const [player, setPlayer] = useState<Player | null>(null)
    useEffect(()=>{
        async function fetchPlayer() {
            try {
              const { data, error } = await supabase
                .from("formPlayer")
                .select()
                .eq("id", props.playerID);
              if (error) {
                setError(error.message);
              } else {
                if (data) {
                  setPlayer(data[0] as Player);
                }
              }
            } catch (e) {
              setError("An unexpected error occurred while fetching player IDs.");
              console.error("An unexpected error occurred:", e);
            }
          }
          fetchPlayer()
    },[props.playerID])
  return (
    <>
        {player?
        <div className="flex flex-col items-center justify-center text-sm">
        <img
          className="object-center object-cover rounded-full h-28 w-28"
          src={player.image}
          alt="photo"
        />
        <div className='font-bold h-10 text-center flex items-center'>{player.name}</div>
        <div className='text-center'>{player.department}</div>
        <div className='text-center'>{player.rating}</div>
      </div>:null
      }
    </>
  )
}

export default PlayerInfo
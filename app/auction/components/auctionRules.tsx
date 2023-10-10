import React from "react";

type Props = {};

const AuctionRules = (props: Props) => {
  return (
    <div className="w-full max-w-7xl mx-auto md:px-0 px-5 pb-5">
      <div className="text-center text-3xl font-bold py-10 ">
        Auction rules for League of SETS Season 2
      </div>
      <div className="flex flex-col gap-y-5 text-lg text-justify">
        <div>
          <span className="font-semibold">Starting League Points:</span> At the
          beginning of the auction, each manager is given a budget of 5000
          League Points, which are like tokens they can use to bid on players
          during the auction.
          <div>
            <span className="font-semibold">Example:</span> Imagine starting
            with 5000 League Points in your virtual wallet.
          </div>
        </div>
        <div>
          <span className="font-semibold">Icon Players:</span> Each team can have one Icon player. Icons are standout players known for their exceptional skills and experience. The bidding for Icon players happens first, and then the Icons will join their respective managers for the rest of the auction.
          <div>
            <span className="font-semibold">Example:</span> Think of the Icon player as the team&apos;s superstar. Teams compete by offering League Points to acquire an Icon player like Alex. The team with the highest bid gets Alex as their Icon.
          </div>
        </div>
        <div>
          <span className="font-semibold">Icon Player Base Price:</span> If any
          Icon player is not purchased during the initial bidding phase, the
          base price of that Icon player will increase by 100 League Points when
          they are offered again in the subsequent phase of bidding.
          <div>
            <span className="font-semibold">Example:</span> If no one buys an
            Icon player like Alex during the first round, the base price for
            Alex in the next round will be 100 points higher.
          </div>
        </div>
        <div>
          <span className="font-semibold">Player Ownership:</span> When a
          manager successfully wins a bid for a player, that player becomes a
          permanent part of their team. These players cannot be traded, sold, or
          given away to another team.
          <div>
            <span className="font-semibold">Example:</span> If you win a bid for
            a player named Alex, Alex becomes a member of your team, and no
            other team can have him.
          </div>
        </div>
        <div>
          <span className="font-semibold">Maximum Bid Limit:</span> There&apos;s a maximum limit on how many League Points a team can bid for a player. This limit ensures that even after a successful bid, the team must have enough points left to assemble a complete team of at least 7 players fulfilling the minimium requirement. 
          <div>
            <span className="font-semibold">Example:</span> If your team has 5000 League Points left, you can&apos;t bid more than 3300 League Points for the player because you need to have enough left to get 7 players in total consisting of atleast 1 A(600) category,1 B(300) category and rest from C category(200).
          </div>
        </div>
        <div>
          <span className="font-semibold">Pausing Bidding:</span> When a team successfully acquires 7 players, their bidding is paused, even if they still have League Points left. This ensures that all teams start with at least 7 players before the auction continues.
          <div>
            <span className="font-semibold">Example:</span> If your team already has 7 players, you can&apos;t bid on more players until all other teams also have 7 players.
          </div>
        </div>
        <div>
          <span className="font-semibold">Player Category Balance:</span>It&apos;s necessary to buy players from every category, otherwise, having a minimum of one player from each category is a must. Keep this in mind during the auction. A minimum of 1 player must be bought from each category, however, a maximum of 2 players can be bought from category A anda maximum of 3 from Category B.
          <div>
            <span className="font-semibold">Example:</span> Let&apos;s say Alex from the Icon category is bought with 3300 League Points, leaving the manager with 1700 League Points. In this case, the manager must acquire 6 more players (1A,1B,4C) from Category A, B, and C somehow to ensure a balanced team.
          </div>
        </div>
        <div>
          <span className="font-semibold">Manager Playing:</span> Managers have the option to play as a player in their team&apos;s lineup, but it comes at a cost. They need to deduct 600 League Points from their total points if they choose to play. In this case, the team will require to buy atleast 6 more players instead of 7 because the manager will be playing.
          <div>
            <span className="font-semibold">Example:</span> If you decide to play as a manager-player, you&apos;ll have 700 fewer League Points available for bidding, and your team will need to purchase atleast 6 more players to complete the lineup.
          </div>
        </div>
        <div>
          So, think wisely, bid smart, and make sure you have a full team of at least 7
          players. These rules keep the game fun and fair for everyone in the
          League of SETS Season 2!
        </div>
      </div>
    </div>
  );
};

export default AuctionRules;

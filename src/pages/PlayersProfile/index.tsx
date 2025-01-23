import React from "react";
import PlayerCard from "../../components/Card/PlayerCard";

const PlayersProfile = () => {
  return (
    <div className="grid  gap-[10px] p-[10px] justify-center">
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
    </div>
  );
};

export default PlayersProfile;

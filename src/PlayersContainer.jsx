import React, { useEffect } from "react";
import Players from "./Players";

const PlayersContainer = ({ players }) => {
  const mappedPlayers = () =>
    players.map((cur) => {
      return <Players key={cur} name={cur} />;
    });

  return (
    <React.Fragment>
      <div className="playercontainer">{mappedPlayers()}</div>
    </React.Fragment>
  );
};

export default PlayersContainer;

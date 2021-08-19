import React, { useRef, useState, useEffect } from "react";
import PlayersContainer from "./PlayersContainer.jsx";
import Gameboard from "./Gameboard";

function App() {
  const [playerDisplay, setPlayerDisplay] = useState("flex");
  const nameRef = useRef();
  const [playerCount, setPlayerCount] = useState([]);
  const returnPlayers = () => playerCount;

  useEffect(() => {
    returnPlayers();
  }, [playerCount]);

  return (
    <React.Fragment>
      <div
        style={{
          flexDirection: "column",

          width: "100vw",
          height: "100vh",
          position: "absolute",
          backgroundColor: "#fff",
          display: playerDisplay,
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "linear-gradient( rgb(9, 0, 85), rgb(105, 0, 97), rgb(9, 0, 85))",
        }}
      >
        <div
          style={{
            width: "30vw",
            height: "70vh",
            borderRadius: "50px",
            border: "3px solid ",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="trivia.png"
            alt="logo"
            width="400px"
            style={{ margin: "20px" }}
          />
          <h2 style={{ margin: "30px", fontWeight: "600", color: "#fff" }}>
            Enter Players names
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPlayerCount([...playerCount, nameRef.current.value]);
              console.log(playerCount);
              e.target.reset();
              nameRef.current.blur();
              nameRef.current.focus();
            }}
          >
            <input
              style={{ margin: "30px", width: "200px", height: "50px" }}
              ref={nameRef}
              type="text"
            ></input>
          </form>
          <button
            onClick={() => {
              setPlayerDisplay("none");
            }}
            style={{ margin: "30px", width: "200px", height: "50px" }}
          >
            Done
          </button>
          <p style={{ margin: "30px", fontWeight: "600", color: "#fff" }}>
            {returnPlayers().map((cur) => `${cur} `)}
          </p>
        </div>
      </div>
      <div className="game">
        <Gameboard />
        <PlayersContainer players={returnPlayers()} />
      </div>
    </React.Fragment>
  );
}

export default App;

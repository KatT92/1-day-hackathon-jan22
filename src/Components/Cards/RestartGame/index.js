import React from "react";

function RestartGame({restartGame, deckId}) {

    return (
        <div>
        <button onClick={()=>{restartGame(deckId)}}>Restart Game</button>
        </div>
    )
    }

    export default RestartGame
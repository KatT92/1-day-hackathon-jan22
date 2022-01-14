import React from "react";

function DisplayDiscard({discard}) {

    return (
        <div>
        Discard Pile: 
        <div>
          {discard.map((card) => (
            <img key={card[0].code} src={card[0].image} alt="card"/>
          ))}
        </div>
        </div>
      );
    }

    export default DisplayDiscard
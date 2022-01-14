import React from "react";

function DisplayHand({hand, key}) {



    return (
        <div>
        My hand: 
        <div>
          {hand.map((card) => (
            <img key={card[0].code} src={card[0].image} alt="card"/>
          ))}
        </div>
        </div>
      );
    }

    export default DisplayHand
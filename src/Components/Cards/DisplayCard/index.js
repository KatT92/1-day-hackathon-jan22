import React from "react";

function DisplayCard({card, deck}) {

    let suit = card[0].suit
    let value = card[0].value
    let image = card[0].image

    return (
    <div>
        <p>You drew the {value} of {suit}<br/>
        Deck: {deck} cards remaining
        </p>
        <img src={image} alt="card" />
    </div>
    )
    }

    export default DisplayCard
import React from "react";


function ShuffleDeck({shuffleDeck, deckId}) {
return (
<div>
    <button onClick={()=>{shuffleDeck(deckId)}}>Shuffle Deck</button>
</div>
)
}
export default ShuffleDeck

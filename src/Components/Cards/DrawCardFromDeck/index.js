import React from "react";



function DrawCard({drawCard, deckId}) {
return (
<div>
    <button onClick={()=>{drawCard(deckId)}}>Draw a card</button>
</div>
)
}

export default DrawCard
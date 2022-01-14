import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import DrawCard from "../Cards/DrawCardFromDeck/index"
import ShuffleDeck from "../Cards/ShuffleDeck/index"
import DisplayCard from "../Cards/DisplayCard/index"

import AddToHand from "../Cards/AddToHand/index"
import DisplayHand from "../Cards/DisplayHand/index"

import RestartGame from '../Cards/RestartGame';
import DiscardCard from '../Cards/DiscardCard';
import DisplayDiscard from '../Cards/DisplayDiscard';

// async function rollDice(num) {
//   let response = await fetch(`http://roll.diceapi.com/json/d${num}`)
//   let data = await response.json()
//   console.log(data)
// }

// async function DnD(string) {
//   let response = await fetch(`https://www.dnd5eapi.co/api/${string}`)
//   let data = await response.json()
//   console.log(data)
// }


function App() {

  const [card, setCard] = useState([{suit:"", value:"", image:""}])
  const [deck, setDeck] = useState(52)
  const [hand, setHand] = useState([])
  const [discard, setDiscard] = useState([])

  useEffect(()=>{
    drawCard()
  }, [])

  async function drawCard() {
    let response = await fetch("https://www.deckofcardsapi.com/api/deck/bq8i4pc9poh5/draw/?count=1")
    let data = await response.json()
    let suit = data.cards[0].suit
    let value = data.cards[0].value
    let image = data.cards[0].image
    let code = data.cards[0].code
    let remaining = data.remaining
    let cardData = [{suit:suit, value:value, image:image, code:code}]
    console.log(data)
    setCard(cardData)
    setDeck(remaining)
  }

  async function shuffleDeck() {
    let response = await fetch("https://www.deckofcardsapi.com/api/deck/bq8i4pc9poh5/shuffle/?remaining=true")
    let data = await response.json()
    console.log("shuffle", data)
    return data
  }

  async function restartGame() {
    let response = await fetch("https://www.deckofcardsapi.com/api/deck/bq8i4pc9poh5/shuffle/")
    let data = await response.json()
    console.log("shuffle", data)
    drawCard()
    setDeck(52)
    setCard(card)
    setHand([])
    setDiscard([])
    return data
  }
    
 function addToHand() {
  setHand([...hand, card])
  drawCard()
  setCard(card)
}

function discardCard() {
setDiscard([...discard, card])
drawCard()
setCard(card)
}

// let rollADice = rollDice(8)
// let DnDclass = DnD("spells")

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's play a game!</h1>
        <DrawCard drawCard={drawCard}/>
        <ShuffleDeck shuffleDeck={shuffleDeck} />
        <RestartGame restartGame={restartGame} />
        <DisplayCard drawCard={drawCard} deck={deck} card={card}/>
        <AddToHand addToHand={addToHand} hand={hand} card={card}/>
        <DiscardCard discardCard={discardCard}/>
        <DisplayHand hand={hand}/>
        <DisplayDiscard discard={discard}/>
      </header>
    </div>
  );
}

export default App;

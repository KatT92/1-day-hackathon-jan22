import React from 'react';
import { useState, useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import DrawCard from "../Cards/DrawCardFromDeck/index"
import ShuffleDeck from "../Cards/ShuffleDeck/index"
import DisplayCard from "../Cards/DisplayCard/index"

import AddToHand from "../Cards/AddToHand/index"
import DisplayHand from "../Cards/DisplayHand/index"

import RestartGame from '../Cards/RestartGame';
import DiscardCard from '../Cards/DiscardCard';
import DisplayDiscard from '../Cards/DisplayDiscard';

import HigherOrLower from '../Cards/HigherOrLower';
import DisplayHigherOrLower from '../Cards/DisplayHigherOrLower';

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

  const [card, setCard] = useState([{suit: "DIAMONDS", value: "5", image: "https://deckofcardsapi.com/static/img/5D.png"}])
  const [deck, setDeck] = useState(52)
  const [hand, setHand] = useState([])
  const [discard, setDiscard] = useState([])
  const [string, setString] = useState("")
  const [bool, setBool] = useState("")
  const [compare, setCompare] = useState(card)

  useEffect(()=>{
    drawCard()
  }, [])

  async function drawCard() {
    let response = await fetch(`https://www.deckofcardsapi.com/api/deck/bq8i4pc9poh5/draw/?count=1`)
    let data = await response.json()
    let suit = data.cards[0].suit
    let value = data.cards[0].value
    let image = data.cards[0].image
    let code = data.cards[0].code
    let remaining = data.remaining
    let cardData = [{suit:suit, value:value, image:image, code:code}]
    //console.log(data)
    //bq8i4pc9poh5
    //am0z3oog41yu
    setCard(cardData)
    setDeck(remaining)
  }

  async function shuffleDeck(deckId) {
    let response = await fetch(`https://www.deckofcardsapi.com/api/deck/bq8i4pc9poh5/shuffle/?remaining=true`)
    let data = await response.json()
    console.log("shuffle", data)
    return data
  }

  async function restartGame(deckId) {
    let response = await fetch(`https://www.deckofcardsapi.com/api/deck/bq8i4pc9poh5/shuffle/`)
    let data = await response.json()
    console.log("shuffle", data)
    drawCard(deckId)
    setDeck(52)
    setCard(card)
    setHand([])
    setCompare([card])
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

function compareCards() {
setCompare([...compare, card])
drawCard()
setCard(card)
}

function higherOrLower(string) {
if (string === "higher") {setString("higher")}
else if (string === "lower") {setString("lower")}

compareCards()
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's play a game!</h1>
        <nav>
        {/* <Link to="/game1">/ Game 1 /</Link> */}
        <Link to="/"> Home /</Link>
        <Link to="/game1"> Game1 /</Link>
        <Link to="/game2"> Higher or Lower? /</Link>
        </nav>
    <Routes>
    <Route path="/" element={<h1>Welcome!</h1>} />
    <Route path="/game1" element={<div>
        <DrawCard drawCard={drawCard} deckId="am0z3oog41yu"/>
        <ShuffleDeck shuffleDeck={shuffleDeck} deckId="am0z3oog41yu"/>
        <RestartGame restartGame={restartGame} deckId="am0z3oog41yu"/>
        <DisplayCard drawCard={drawCard} deck={deck} card={card}/>
        <AddToHand addToHand={addToHand} hand={hand} card={card}/>
        <DiscardCard discardCard={discardCard}/>
        <DisplayHand hand={hand}/>
        <DisplayDiscard discard={discard}/>
        </div>
        } />
    <Route path="/game2" element={<div>
    <DrawCard drawCard={drawCard} deckId="bq8i4pc9poh5"/>
    <ShuffleDeck shuffleDeck={shuffleDeck} deckId="bq8i4pc9poh5" />
    <RestartGame restartGame={restartGame} deckId="bq8i4pc9poh5"/>
    <DisplayCard deck={deck} card={card}/>
    <HigherOrLower higherOrLower={higherOrLower} drawCard={drawCard} compareCards={compareCards} card={card} compare={compare} string={string} bool={bool}/>
    <DisplayHigherOrLower string={string} bool={bool}/>
    </div>}/>
    </Routes>
      </header>
    </div>
  );
}

export default App;

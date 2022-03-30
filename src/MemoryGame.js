import React, { useEffect, useState } from 'react'
import GameBoard from './components/GameBoard'
import GameOver from './components/GameOver'
import game from './game/game'

export default function MemoryGame() {
  const [gameOver, setgameOver] = useState(false)
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(game.createCardsFromTechs())
  }, [])
  function restart() {
    game.clearCards();
    setCards(game.createCardsFromTechs())
    setgameOver(false)
  }
  function handleFlip(card) {

    game.flipCard(card.id , ()=>{
      //GameOverCallback
      setgameOver(true)
    },()=>{
      //NoMatchCallback
      setCards([...game.cards])
    })
     setCards([...game.cards])
  }
  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} restart={restart}></GameOver>
    </div>

  )
}

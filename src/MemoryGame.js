import React, { useEffect, useState} from 'react'
import GameBoard from './components/GameBoard'
import GameOver from './components/GameOver'
import game from './game/game'
import DarkTheme from './components/DarkTheme'
import GameProvider from './context/context'

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
    <div className="backnone">
      <GameProvider>
      <DarkTheme></DarkTheme>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} restart={restart}></GameOver>
      </GameProvider>
    </div>

  )
}

import React, { useEffect, useState } from 'react'
import GameBoard from './components/GameBoard'
import GameOver from './components/GameOver'
import game from './game/game'
import DarkTheme from './components/DarkTheme'
import GameProvider from './context/context'

export default function MemoryGame() {

  const [gameOver, setgameOver] = useState(false)
  const [cards, setCards] = useState([])
  const [level , setLevel] = useState(1)

  useEffect(() => {
    setCards(game.createCardsFromTechs())
    cadsflipped();

  }, [])
  useEffect(()=>{
    cadsflipped();
  },[level])
  
  
  function restart() {
    game.clearCards();
    setLevel(1)
    game.lowerLvl();
    setCards(game.createCardsFromTechs())
    setgameOver(false)
  }
  function levelUp(){
    game.uplvl();
    game.clearCards();
    setCards(game.createCardsFromTechs())
    setLevel(level + 1)
    setgameOver(false)
    
  }
  function cadsflipped(){
    setTimeout(()=>{
        game.cards.forEach(u => u.flipped =false)
        setCards([...game.cards])
    },2000)
}
  function handleFlip(card) {
    game.flipCard(card.id, () => {
      //GameOverCallback
      setgameOver(true)
    }, () => {
      //NoMatchCallback
      setCards([...game.cards])

    })
    setCards([...game.cards])
  }
  return (
    <div className="backnone">
      <GameProvider>
        <DarkTheme></DarkTheme>
        <GameBoard handleFlip={handleFlip} cards={cards} level = {level} setLevel={setLevel}></GameBoard>
        <GameOver show={gameOver} restart={restart} levelUp={levelUp}  level = {level} setLevel={setLevel}></GameOver>
      </GameProvider>
    </div>

  )
}

import React, { Fragment } from 'react'
import game from '../game/game'

export default function GameOver(props) {
  return (props.show  ?
    <div id="gameOver">
        <div>
            Parabéns , você completou o jogo !
        </div>
        <button id="restart" onClick={props.restart}>Restart</button>
        <button id="lvl" onClick={props.levelUp}>Nível 2</button>
    </div> : <Fragment/>

  )
}

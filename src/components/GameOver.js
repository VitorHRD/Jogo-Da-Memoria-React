import React, { Fragment } from 'react'

export default function GameOver(props) {
  return (props.show ?
    <div id="gameOver">
      <div>
        {props.level !==  3 ? "Parabéns  , você completou a fase!" : "Parabéns , você completou o jogo!"  }
      </div>
      <div>
        <button id="restart" onClick={()=>{props.restart()}}>Restart</button>
        
        {props.level !== 3  ?<button id="lvl" onClick={() => { props.levelUp() }}> {props.level === 1 ? "Nível 2" : "Nível 3"} </button>
        :<Fragment />}
      </div>
    </div> : <Fragment />

  )
}

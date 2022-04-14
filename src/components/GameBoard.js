import React from 'react'
import CardElement from './CardElement'

export default function GameBoard(props) {
    return (
         props.level === 1 ?
        <div id="gameBoard" className='gameBoardLvl1'>
            {props.cards.map((card, index) => 
                <CardElement handleFlip={props.handleFlip} key={index} card={card}></CardElement>
             )}
        </div>
        : props.level === 2 ?
        <div id="gameBoard" className='gameBoardLvl2'>
            {props.cards.map((card, index) => 
                <CardElement handleFlip={props.handleFlip} key={index} card={card}></CardElement>
             )}
        </div>
        : <div id="gameBoard" className='gameBoardLvl3'>
        {props.cards.map((card, index) => 
            <CardElement handleFlip={props.handleFlip} key={index} card={card}></CardElement>
         )}
        </div>
        
    )
}

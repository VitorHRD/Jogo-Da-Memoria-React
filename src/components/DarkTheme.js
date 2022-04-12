import React, { useContext } from 'react'
import { GameContext } from '../context/context'


export default function DarkTheme(props) {
    let { emoji } = useContext(GameContext);
    let [emojiValue, setEmojiValue] = emoji;
    if (emojiValue === true) {
        document.body.style.backgroundColor = "#101c2c";
        localStorage.setItem("theme", "dark");
    }
    else {
        document.body.style.backgroundColor = "white";
        localStorage.setItem("theme", "light");
    }
    return (emojiValue === false ?
        <div className="toggle">
            <div id="emoji" >🌞</div>
            <input type="checkbox" id="foo"></input>
            <label htmlFor="foo" onClick={() => {
                setEmojiValue(emojiValue === true ? false : true)
            }}></label>
        </div>
        :
        <div className="toggle">
            <div id="emoji2">🌜</div>
            <input type="checkbox" id="foo"></input>
            <label htmlFor="foo" onClick={() => {
                setEmojiValue(emojiValue === true ? false : true)
            }}></label>
        </div>
    )
}
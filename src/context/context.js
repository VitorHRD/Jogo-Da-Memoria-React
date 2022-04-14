import React, { createContext, useEffect, useState } from "react";


export const GameContext = createContext();

function GameProvider(props) {
  let darkTheme = localStorage.getItem("theme")


  useEffect(() => {
    if (darkTheme === "dark") {
      setEmoji(true)
    }
    else {
      setEmoji(false)
    }
  },[])

  const [emoji, setEmoji] = useState(false)

  return (
    <GameContext.Provider value={{ emoji: [emoji, setEmoji]}}>
      {props.children}
    </GameContext.Provider>
  )
}
export default GameProvider

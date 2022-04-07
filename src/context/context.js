import React , {createContext , useState} from "react";


export const GameContext = createContext();

function GameProvider(props){
    const [emoji , setEmoji] = useState(false)
    
    return(
      <GameContext.Provider value={{emoji:[emoji , setEmoji]}}>
          {props.children}
      </GameContext.Provider>
    )
}
export default GameProvider

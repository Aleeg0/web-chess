import React, {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";
import './app.css'
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";


function App() {
    const [board, setBoard] = useState(new Board());
    const [whitePlayer, setWhitePlayer] = useState(new Player());
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player|null>(null);

    useEffect(()=>{
        console.log("App start");
        Restart();
    },[])

    function Restart() {
        const newBoard = new Board();
        newBoard.initFigures();
        setBoard(newBoard);
        setCurrentPlayer(whitePlayer);
    }

    const swapPlayer = () => {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
    }

    return(
        <>
            <header>
                <h1>ONLINE CHESS</h1>
            </header>
            <div className="app">
                <BoardComponent
                    board={board}
                    setBoard={setBoard}
                    currentPlayer={currentPlayer}
                    swapPlayer={swapPlayer}
                />
            </div>
        </>
    );
}

export default App;

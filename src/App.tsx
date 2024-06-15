import React, {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";
import './app.css'
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";


function App() {
    const [board, setBoard] = useState(new Board());
    const [player, setPlayer] = useState(new Player());

    useEffect(()=>{
        console.log("App start");
        Restart();
    },[])

    function Restart() {
        const newBoard = new Board();
        newBoard.initFigures();
        console.log("Restart");

        setBoard(newBoard);
    }
    return(
        <>
            <div className="app">
                <BoardComponent board={board} setBoard={setBoard}/>
            </div>
        </>
    );
}

export default App;

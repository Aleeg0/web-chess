import React, {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";
import './app.css'
import {Board} from "./models/Board";


function App() {
    const [board, setBoard] = useState(new Board());

    useEffect(()=>{
        Restart();
    },[])

    function Restart() {
        const newBoard = new Board();
        newBoard.initCells();
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

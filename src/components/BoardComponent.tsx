import React, {FC, useCallback, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

interface BoardProps{
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board,setBoard}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    const clickCell = (cell: Cell) => {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        }
        else {
            setSelectedCell(cell);
        }
    }

    useEffect(()=> {
        highlightCells()
    }, [selectedCell]);

    function highlightCells() {
        board.setAvailableCells(selectedCell);
        updateBoard();
    }

    const updateBoard = () => {
        const newBoard = board.getCopy();
        setBoard(newBoard);
    }

    return (
        <div className="board">
            {board.cells.map((row,index) =>
            <React.Fragment key={index}>
                {row.map((cell)=>
                    <CellComponent
                        key={cell.id}
                        cell={cell}
                        isSelected={selectedCell?.x === cell.x && selectedCell?.y === cell.y}
                        click={clickCell}
                    />
                )}
            </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;
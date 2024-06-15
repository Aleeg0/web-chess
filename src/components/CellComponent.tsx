import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps {
    cell: Cell;
    isSelected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell,isSelected,click}) => {
    return (
        <div className= {["cell", cell.color, isSelected ? "selected" : "",
            cell.isAvailable && cell.figure ? "availableFigure" : ""].join(" ")}
             onClick={() => click(cell)}
        >
            {cell.isAvailable && !cell.figure && <div className="available"/> }
            {cell.figure?.logo &&
                <img src={cell.figure.logo}
                     alt={cell.figure.name ? cell.figure.name : ""}
                />
            }
        </div>
    );
};

export default CellComponent;
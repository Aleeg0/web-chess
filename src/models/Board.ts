import {Cell} from "./Cell";
import {Colors} from "./Colors";

export class Board {
    cells: Cell[][] = [];
    private readonly COUNT_OF_CELL = 8;
    public initCells(){
        for (let i = 0; i < this.COUNT_OF_CELL; i++) {
            let row: Cell[] = [];
            for (let j = 0; j < this.COUNT_OF_CELL; j++) {
                if ((j+i) % 2 === 0)
                    row.push(new Cell(i,j,Colors.WHITE, null));
                else
                    row.push(new Cell(i,j,Colors.BLACK, null));
            }
            this.cells.push(row);
        }
    }
}
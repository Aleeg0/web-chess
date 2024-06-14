import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {King} from "./figures/King";
import {Pawn} from "./figures/Pawn";
import {Queen} from "./figures/Queen";
import {Rook} from "./figures/Rook";
import {Knight} from "./figures/Knight";
import {Bishop} from "./figures/Bishop";

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

    private initPawns(){
        for (let i = 0; i < this.COUNT_OF_CELL; i++) {
            new Pawn(this.cells[1][i],Colors.BLACK);
            new Pawn(this.cells[6][i],Colors.WHITE);
        }
    }

    private initRooks(){
        new Rook(this.cells[0][0],Colors.BLACK);
        new Rook(this.cells[0][7],Colors.BLACK);
        new Rook(this.cells[7][0],Colors.WHITE);
        new Rook(this.cells[7][7],Colors.WHITE);
    }

    private initKnight(){
        new Knight(this.cells[0][1],Colors.BLACK);
        new Knight(this.cells[0][6],Colors.BLACK);
        new Knight(this.cells[7][1],Colors.WHITE);
        new Knight(this.cells[7][6],Colors.WHITE);
    }

    private initBishop(){
        new Bishop(this.cells[0][2],Colors.BLACK);
        new Bishop(this.cells[0][5],Colors.BLACK);
        new Bishop(this.cells[7][2],Colors.WHITE);
        new Bishop(this.cells[7][5],Colors.WHITE);
    }

    private initQueens(){
        new Queen(this.cells[0][3],Colors.BLACK);
        new Queen(this.cells[7][3],Colors.WHITE);
    }

    private initKings(){
        new King(this.cells[0][4],Colors.BLACK);
        new King(this.cells[7][4],Colors.WHITE);
    }

    public initFigures(){
        this.initPawns();
        this.initRooks();
        this.initKnight();
        this.initBishop();
        this.initQueens();
        this.initKings();
    }
}
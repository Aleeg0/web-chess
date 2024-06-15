import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {King} from "./figures/King";
import {Pawn} from "./figures/Pawn";
import {Queen} from "./figures/Queen";
import {Rook} from "./figures/Rook";
import {Knight} from "./figures/Knight";
import {Bishop} from "./figures/Bishop";
import {FigureName} from "./figures/Figure";

export class Board {
    cells: Cell[][] = [];
    private playerColor: Colors;
    private enemyColor: Colors;
    private readonly COUNT_OF_CELL = 8;

    constructor(playerColor:Colors=Colors.WHITE) {
        this.playerColor = playerColor;
        this.enemyColor = playerColor === Colors.WHITE ? Colors.BLACK : Colors.WHITE;
        this.initCells();
    }
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
            this.cells[1][i].figure = new Pawn(1,i,this.enemyColor);
            this.cells[6][i].figure = new Pawn(6,i,this.playerColor);
        }
    }

    private initRooks(){
        this.cells[0][0].figure = new Rook(0,0,this.enemyColor);
        this.cells[0][7].figure = new Rook(0,7,this.enemyColor);
        this.cells[7][0].figure = new Rook(7,0,this.playerColor);
        this.cells[7][7].figure = new Rook(7,7,this.playerColor);
    }

    private initKnight(){
        this.cells[0][1].figure = new Knight(0,1,this.enemyColor);
        this.cells[0][6].figure = new Knight(0,6,this.enemyColor);
        this.cells[7][1].figure = new Knight(7,0,this.playerColor);
        this.cells[7][6].figure = new Knight(7,6,this.playerColor);
    }

    private initBishop(){
        this.cells[0][2].figure = new Bishop(0,2,this.enemyColor);
        this.cells[0][5].figure = new Bishop(0,5,this.enemyColor);
        this.cells[7][2].figure = new Bishop(7,2,this.playerColor);
        this.cells[7][5].figure = new Bishop(7,5,this.playerColor);
    }

    private initQueens(){
        const yPosition = this.playerColor === Colors.WHITE ? 3 : 4;
        this.cells[0][yPosition].figure = new Queen(0,yPosition,Colors.BLACK);
        this.cells[7][yPosition].figure = new Queen(7,yPosition,Colors.WHITE);
    }

    private initKings(){
        const yPosition = this.playerColor === Colors.WHITE ? 4 : 3;
        this.cells[0][yPosition].figure = new King(0,yPosition,Colors.BLACK);
        this.cells[7][yPosition].figure = new King(7,yPosition,Colors.WHITE);
    }

    public initFigures(){
        this.initPawns();
        this.initRooks();
        this.initKnight();
        this.initBishop();
        this.initQueens();
        this.initKings();
    }

    setAvailableCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.COUNT_OF_CELL; i++) {
            for (let j = 0; j < this.COUNT_OF_CELL; j++) {
                const target: Cell = this.cells[i][j];
                let isAvailable = false;
                if (selectedCell) {
                    switch (selectedCell.figure?.name) {
                        case FigureName.PAWN:
                            isAvailable = selectedCell.figure.canMove(target)
                            break;
                        case FigureName.ROOK:
                            isAvailable = selectedCell.figure.canMove(target) &&
                                (this.isEmptyHorizontal(selectedCell, target) ||
                                    this.isEmptyVertical(selectedCell, target))
                            break;
                        case FigureName.KNIGHT:
                            isAvailable = selectedCell.figure.canMove(target)
                            break;
                        case FigureName.BISHOP:
                            isAvailable = selectedCell.figure.canMove(target) &&
                                this.isEmptyDiagonal(selectedCell, target);
                            break;
                        case FigureName.QUEEN:
                            isAvailable = selectedCell.figure.canMove(target) &&
                                (this.isEmptyDiagonal(selectedCell, target) ||
                                    this.isEmptyVertical(selectedCell, target) ||
                                    this.isEmptyHorizontal(selectedCell, target));
                            break;
                        case FigureName.KING:
                            isAvailable = selectedCell.figure.canMove(target);
                            break;
                        default:
                            isAvailable = false;
                            break;
                    }
                }
                target.isAvailable = isAvailable;
            }
        }
    }

    private isEmptyVertical(current: Cell,target:Cell) : boolean {
        if (current.y !== target.y){
            return false;
        }
        const minX = Math.min(current.x, target.x);
        const maxX = Math.max(current.x, target.x);
        for (let x = minX+1; x < maxX; x++) {
            if (!this.cells[x][current.y].isEmpty())
                return false;
        }
        return true;
    }

    private isEmptyHorizontal(current: Cell,target: Cell) : boolean{
        if (current.x !== target.x){
            return false;
        }
        const minY = Math.min(target.y, current.y);
        const maxY = Math.max(target.y, current.y);
        for (let y = minY+1; y < maxY; y++) {
            if (!this.cells[current.x][y].isEmpty()) {
                return false;
            }
        }
        return true;
    }

    private isEmptyDiagonal(current: Cell,target: Cell) : boolean {
        const absX = Math.abs(current.x - target.x);
        const absY = Math.abs(current.y - target.y);
        if (absY !== absX)
            return false;
        const dx = current.x < target.x ? 1 : -1;
        const dy = current.y < target.y ? 1 : -1;
        for (let i = 1; i < absY; i++) {
            if (!this.cells[current.x + dx*i][current.y + dy*i].isEmpty()) {
                return false;
            }
        }
        return true;
    }

    getCopy():Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        return newBoard;
    }
}
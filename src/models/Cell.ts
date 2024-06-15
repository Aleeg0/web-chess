import {Colors} from "./Colors";
import {Figure} from "./figures/Figure";
import {Board} from "./Board";


export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    readonly board: Board;
    figure: Figure | null;
    isAvailable:boolean;
    id: number;

    isEmpty():boolean {
        return this.figure === null;
    }

    isEmptyHorizontal(target: Cell) : boolean{
        if (this.x !== target.x){
            return false;
        }
        const minY = Math.min(target.y, this.y);
        const maxY = Math.max(target.y, this.y);
        for (let y = minY+1; y < maxY; y++) {
            if (!this.board.cells[this.x][y].isEmpty()) {
                return false;
            }
        }
        return true;
    }

    isEmptyVertical(target: Cell) : boolean {
        if (this.y !== target.y){
            return false;
        }
        const minX = Math.min(target.x, this.x);
        const maxX = Math.max(target.x, this.x);
        for (let x = minX+1; x < maxX; x++) {
            if (!this.board.cells[x][this.y].isEmpty())
                return false;
        }
        return true;
    }

    isEmptyDiagonal(target: Cell) : boolean {
        const absX = Math.abs(this.x - target.x);
        const absY = Math.abs(this.y - target.y);
        if (absY !== absX)
            return false;
        const dx = this.x < target.x ? 1 : -1;
        const dy = this.y < target.y ? 1 : -1;
        for (let i = 1; i < absY; i++) {
            if (!this.board.cells[this.x + dx*i][this.y + dy*i].isEmpty()) {
                return false;
            }
        }
        return true;
    }

    constructor(x: number, y: number, color: Colors, figure: Figure | null, board: Board) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.isAvailable = false;
        this.board = board;
        this.id = Math.random();
    }

    setFigure(figure: Figure): void {
        this.figure = figure;
        this.figure.cell = this;

    }

    moveFigure(target: Cell){
        if (this.figure && this.figure.canMove(target)){
            this.figure.move(target);
            target.setFigure(this.figure);
            this.figure = null;
        }
    }

    isEnemy(target: Cell):boolean {
        if (target.figure)
            return target.figure.color !== this.color;
        return false;
    }
}
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import aLogo from "../../assets/black-bishop.png"

export enum FigureName{
    PAWN = "pawn",
    ROOK = "rook",
    KNIGHT = "knight",
    BISHOP = "bishop",
    QUEEN = "queen",
    KING = "king"
}

export class Figure {
    cell: Cell;
    color: Colors;
    logo: typeof aLogo | null;
    name: FigureName | null;
    id: number;


    constructor(cell: Cell, color: Colors) {
        this.cell = cell;
        this.color = color;
        this.cell.figure = this;
        this.logo = null;
        this.name = null;
        this.id = Math.random();
    }

    canMove(target:Cell): boolean{
        if (this.color === target.figure?.color){
            return false;
        }
        if (target.figure?.name === FigureName.KING)
            return false;
        return true;
    }

    move(target:Cell){
        //target.figure = this;
    }
}
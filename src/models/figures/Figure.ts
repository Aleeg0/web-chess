import {Cell} from "../Cell";
import {Colors} from "../Colors";
import aLogo from "../../assets/black-bishop.png"

export enum FigureName{
    PAWN,
    ROOK,
    KNIGHT,
    BISHOP,
    QUEEN,
    KING
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
        return true;
    }

    move(target:Cell){

    }
}
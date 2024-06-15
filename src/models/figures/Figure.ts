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
    color: Colors;
    logo: typeof aLogo | null;
    protected _name: FigureName | null;
    id: number;
    protected x: number;
    protected y: number;

    get name(): FigureName | null {
        return this._name;
    }

    constructor(x:number,y:number,color: Colors) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.logo = null;
        this._name = null;
        this.id = Math.random();
    }

    canMove(target:Cell): boolean{
        if (this.color === target.figure?.color){
            return false;
        }
        if (target.figure?._name === FigureName.KING)
            return false;
        return true;
    }

    move(target:Cell){
        this.x = target.x
        this.y = target.y;
    }

    protected isEnemy(target:Figure|null):boolean{
        if (target){
            return this.color !== target.color;
        }
        return false;
    }
}
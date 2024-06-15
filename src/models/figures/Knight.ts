import {Figure, FigureName} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import BLACK_LOGO from "../../assets/black-knight.png";
import WHITE_LOGO from "../../assets/white-knight.png";

export class Knight extends Figure {

    constructor(x:number,y:number, color: Colors) {
        super(x,y,color);
        this.logo = color ===  Colors.BLACK ? BLACK_LOGO : WHITE_LOGO;
        this._name = FigureName.KNIGHT;
    }


    canMove(target: Cell): boolean {
        if (!super.canMove(target)){
            return false;
        }
        const dx = Math.abs(target.x - this.x);
        const dy = Math.abs(target.y - this.y);
        if ((dx === 2 && dy === 1) || (dx === 1 && dy === 2))
            return true;
        return false;
    }
}
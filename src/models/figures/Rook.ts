import {Figure, FigureName} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import BLACK_LOGO from "../../assets/black-rook.png";
import WHITE_LOGO from "../../assets/white-rook.png";

export class Rook extends Figure {

    constructor(x:number,y:number, color: Colors) {
        super(x,y,color);
        this.logo = color ===  Colors.BLACK ? BLACK_LOGO : WHITE_LOGO;
        this._name = FigureName.ROOK;
    }


    canMove(target: Cell): boolean {
        return super.canMove(target);
    }
}
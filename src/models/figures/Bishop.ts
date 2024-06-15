import {Figure, FigureName} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import BLACK_LOGO from "../../assets/black-bishop.png";
import WHITE_LOGO from "../../assets/white-bishop.png";

export class Bishop extends Figure {

    constructor(x:number,y:number, color: Colors) {
        super(x,y,color);
        this.logo = color ===  Colors.BLACK ? BLACK_LOGO : WHITE_LOGO;
        this._name = FigureName.BISHOP;
    }


    canMove(target: Cell): boolean {
        return super.canMove(target);
    }
}
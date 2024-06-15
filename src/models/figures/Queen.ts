import {Figure, FigureName} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import BLACK_LOGO from "../../assets/black-queen.png";
import WHITE_LOGO from "../../assets/white-queen.png";

export class Queen extends Figure {

    constructor(x:number,y:number, color: Colors) {
        super(x,y,color);
        this.logo = color ===  Colors.BLACK ? BLACK_LOGO : WHITE_LOGO;
        this._name = FigureName.QUEEN;
    }

     canMove(target:Cell):boolean {
        return super.canMove(target);
    }

}
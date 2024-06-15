import {Figure, FigureName} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import BLACK_LOGO from "../../assets/black-queen.png";
import WHITE_LOGO from "../../assets/white-queen.png";

export class Queen extends Figure {

    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.logo = color ===  Colors.BLACK ? BLACK_LOGO : WHITE_LOGO;
        this.name = FigureName.QUEEN;
    }

     canMove(target:Cell):boolean {
        if (!super.canMove(target)){
            return false;
        }
        if (this.cell.isEmptyVertical(target)) {
            return true;
        }
        if (this.cell.isEmptyHorizontal(target)) {
            return true;
        }
        if (this.cell.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }

}
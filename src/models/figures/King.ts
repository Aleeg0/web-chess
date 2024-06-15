import {Figure, FigureName} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import BLACK_LOGO from "../../assets/black-king.png";
import WHITE_LOGO from "../../assets/white-king.png";

export class King extends Figure {

    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.logo = color ===  Colors.BLACK ? BLACK_LOGO : WHITE_LOGO;
        this.name = FigureName.KING;
    }


    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        const dx = Math.abs(target.x - this.cell.x);
        const dy = Math.abs(target.y - this.cell.y);
        console.log(this.cell.isEnemy(target) ? (`${target.x},${target.y}`) : ``);
        if (((dx === 1 && dy === 0) || (dx === 0 && dy === 1) || (dx === 1 && dy === 1))
            && (target.isEmpty() || this.cell.isEnemy(target)))
            return true;
        return false;
    }
}
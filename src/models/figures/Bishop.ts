import {Figure, FigureName} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import BLACK_LOGO from "../../assets/black-bishop.png";
import WHITE_LOGO from "../../assets/white-bishop.png";

export class Bishop extends Figure {

    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.logo = color ===  Colors.BLACK ? BLACK_LOGO : WHITE_LOGO;
        this.name = FigureName.BISHOP;
    }
}
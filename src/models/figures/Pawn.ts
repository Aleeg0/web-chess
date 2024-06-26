import {Figure, FigureName} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import BLACK_LOGO from "../../assets/black-pawn.png"
import WHITE_LOGO from "../../assets/white-pawn.png"

export class Pawn extends Figure {

    private isFirstStep: boolean;

    constructor(x:number,y:number, color: Colors) {
        super(x,y,color);
        this.logo = color ===  Colors.BLACK ? BLACK_LOGO : WHITE_LOGO;
        this._name = FigureName.PAWN;
        this.isFirstStep = true;
    }


    canMove(target: Cell): boolean {
        // basic check
        if (!super.canMove(target)) {
            return false;
        }
        // count steps
        const dx = this.color === Colors.BLACK ? 1 : -1;
        // если возможна атака
        if ((target.y-1 === this.y || target.y+1 === this.y)
            && dx * (target.x - this.x) === 1
            && this.isEnemy(target.figure))
            return true;
        // check that it's same row and not empty
        if (target.y !== this.y || !target.isEmpty()) {
            return false;
        }
        // if first step give 2 count step
        if (this.isFirstStep && dx * (target.x - this.x) === 2){
            return true;
        }
        // if not give basic step
        if (dx * (target.x - this.x) === 1){
            return true;
        }
        // otherwise false
        return false;
    }

    //TODO: определить что лучше x,y или cell
    move(target: Cell) {
        super.move(target);
        this.isFirstStep = false;
    }

}
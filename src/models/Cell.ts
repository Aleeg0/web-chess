import {Colors} from "./Colors";
import {Figure} from "./figures/Figure";
import {Board} from "./Board";


export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    private _figure: Figure | null;
    isAvailable:boolean;
    id: number;

    get figure(): Figure | null {
        return this._figure;
    }

    set figure(value: Figure | null) {
        this._figure = value;
    }

    isEmpty():boolean {
        return this._figure === null;
    }

    constructor(x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this._figure = figure;
        this.isAvailable = false;
        this.id = Math.random();
    }

    setFigure(figure: Figure): void {
        this._figure = figure;
    }
    //TODO: переписать так, чтобы была прямая нисходящая зависимость

    // вот тут может быть какой-то пиздец
    moveFigure(target: Cell){
        if (this._figure && this._figure.canMove(target)){
            this._figure.move(target);
            target.setFigure(this._figure);
            this._figure = null;
        }
    }
}
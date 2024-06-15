import {Colors} from "./Colors";

export class Player {
    color: Colors = Colors.WHITE;

    constructor(color: Colors=Colors.WHITE) {
        this.color = color;
    }
}
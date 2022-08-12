import LogItem from "../Interfaces/LogItem";

export default abstract class AbstractLogItem implements LogItem  {

    protected _frame: number;
    protected _deltaT: number;

    constructor(frame: number, deltaT: number) {
        this.frame = frame;
        this.deltaT = deltaT;
    }

    public get frame(): number { return this._frame; }
    public get deltaT(): number { return this._deltaT; }

    protected set frame(value: number) { this._frame = value; }
    protected set deltaT(value: number) { this._deltaT = value; }
    
}
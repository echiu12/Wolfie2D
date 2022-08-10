import Queue from "../DataTypes/Collections/Queue";
import LogItem from "./LogItem";
import Collection from "../DataTypes/Interfaces/Collection";
import RandUtils from "../Utils/RandUtils";
import Scene from "../Scene/Scene";

/**
 * A class representing a recording of a slice of a game.
 */
export default class Recording implements Collection {

    /** The initial scene that the recording starts from. */
    private _scene: new (...args: any) => Scene;
    /** The state of the initial scene that the recording starts from. */
    private _init: Record<string, any>;
    /** The random seed used for this recording */
    private _seed: string;
    /** A record of input events from the user */
    private _recording: Queue<LogItem>;
    /** The maximum number of log items the recording can hold */
    private _capacity: number;

    public constructor(scene: new (...args: any) => Scene, init: Record<string, any> = {}, seed: string = RandUtils.seed, size: number = 100) {
        this._scene = scene;
        this._init = init;
        this._seed = seed;
        this._capacity = size;
        this._recording = new Queue<LogItem>(size);
    }

    public get init(): Record<string, any> { return this._init; }
    public get scene(): new (...args: any) => Scene { return this._scene; }
    public get seed(): string { return this._seed; }

    isEmpty(): boolean { return this._recording.hasItems(); }
    size(): number { return this._recording.getSize(); }
    capacity(): number { return this._capacity; }
    peek(): LogItem { return this._recording.peekNext(); }
    enqueue(item: LogItem): void { this._recording.enqueue(item); }
    dequeue(): LogItem { return this._recording.dequeue(); }

    forEach(func: (item: LogItem, index?: number) => void): void {
        this._recording.forEach(func);
    }
    clear(): void {
        this._recording.clear();
    }

}
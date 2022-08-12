import Queue from "../../Collections/Queue";
import Recorder from "../Interfaces/Recorder";
import Recording from "../Interfaces/Recording";
import Replayer from "../Interfaces/Replayer";
import AbstractLogItem from "./AbstractLogItem";
import AbstractRecorder from "./AbstractRecorder";
import AbstractReplayer from "./AbstractReplayer";

export default abstract class AbstractRecording<T extends AbstractLogItem> implements Recording<T> {

    protected _capacity: number;
    protected _recording: Queue<T>;

    constructor(capacity: number) {
        this._capacity = capacity;
        this._recording = new Queue<T>(this._capacity);
    }

    public abstract recorder(): new (...args: any) => AbstractRecorder<AbstractRecording<T>, T>;
    public abstract replayer(): new (...args: any) => AbstractReplayer<AbstractRecording<T>, T>;

    public isEmpty(): boolean { return this._recording.hasItems(); }
    public size(): number { return this._recording.getSize(); }
    public capacity(): number { return this._capacity; }
    public peek(): T { return this._recording.peekNext(); }
    public enqueue(item: T): void { this._recording.enqueue(item); }
    public dequeue(): T { return this._recording.dequeue(); }
    public forEach(func: (item: T, index?: number) => void): void { this._recording.forEach(func); }
    public clear(): void { this._recording.clear(); }

}
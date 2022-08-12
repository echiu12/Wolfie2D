import Recorder from "../Interfaces/Recorder";
import AbstractLogItem from "./AbstractLogItem";
import AbstractRecording from "./AbstractRecording";

export default abstract class AbstractRecorder<T extends AbstractRecording<E>, E extends AbstractLogItem> implements Recorder<T, E> {

    protected _active: boolean;

    constructor() {
        this._active = false;
    }

    public active(): boolean { return this._active; }
    public abstract start(recording: T): void;
    public abstract stop(): void;
    public abstract update(deltaT: number): void;
}
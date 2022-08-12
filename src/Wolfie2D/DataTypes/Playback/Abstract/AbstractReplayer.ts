import Replayer from "../Interfaces/Replayer";
import AbstractLogItem from "./AbstractLogItem";
import AbstractRecording from "./AbstractRecording";

export default abstract class AbstractReplayer<T extends AbstractRecording<E>, E extends AbstractLogItem> implements Replayer<T, E> {

    protected _active: boolean;

    constructor() {
        this._active = false;
    }

    public active(): boolean { return this._active; }

    public abstract update(deltaT: number): void;

    public abstract start(recording: T, onEnd: () => void): void;

    public abstract stop(): void;
    
}
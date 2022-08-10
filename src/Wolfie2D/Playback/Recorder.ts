import Queue from "../DataTypes/Collections/Queue";
import Receiver from "../Events/Receiver";
import GameEvent from "../Events/GameEvent";
import Recording from "./Recording";
import Updateable from "../DataTypes/Interfaces/Updateable";
import LogItem from "./LogItem";
import Scene from "../Scene/Scene";
import { TimerState } from "../Timing/Timer";
import { GameEventType } from "../Events/GameEventType";


// @ignorePage

export default class Recorder implements Updateable {
	private _receiver: Receiver;
	private _active: boolean;
	private _frame: number;
	private _recording: Recording;

	constructor(){
		this._receiver = new Receiver();

		this._active = false;
		this._frame = 0;
		this._recording = null;

		this._receiver.subscribe(
			[GameEventType.MOUSE_DOWN, GameEventType.MOUSE_UP, GameEventType.MOUSE_MOVE, 
			GameEventType.KEY_DOWN, GameEventType.KEY_UP, GameEventType.CANVAS_BLUR,
			GameEventType.WHEEL_DOWN, GameEventType.WHEEL_UP]
		);
	}

	public update(deltaT: number): void {

		if (!this.active) { this._receiver.ignoreEvents(); }
		else {
			this.frame += 1;
			while(this._receiver.hasNextEvent()){
				this.recording.enqueue(new LogItem(this._frame, deltaT, this._receiver.getNextEvent()));
			}
		}
	}

	private get frame(): number { return this._frame;}
	private set frame(val: number) { this._frame = val; }

	public get active(): boolean { return this._active; }
	public set active(val: boolean) { this._active = val; }

	public get recording(): Recording { return this._recording; }
	private set recording(val: Recording) { this._recording = val; }

	public startRecording(scene: new (...args: any) => Scene, init: Record<string, any>, seed: string, size: number = 100 ): void {
		this.active = true;
		this.frame = 0;
		this.recording = new Recording(scene, init, seed, size);
	}
	public stopRecording(): void {
		this.active = false;
	}
}
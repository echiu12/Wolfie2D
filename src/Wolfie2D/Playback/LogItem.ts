import GameEvent from "../Events/GameEvent";

export default class LogItem {
	frame: number;
	delta: number;
	event: GameEvent;

	constructor(frame: number, deltaT: number, event: GameEvent){
		this.frame = frame;
		this.delta = deltaT;
		this.event = event;
	}
}
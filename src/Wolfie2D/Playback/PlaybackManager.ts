import Updateable from "../DataTypes/Interfaces/Updateable";
import GameEvent from "../Events/GameEvent";
import { GameEventType } from "../Events/GameEventType";
import Receiver from "../Events/Receiver";
import Recorder from "./Recorder";
import Recording from "./Recording";
import Replayer from "./Replayer";

export default class PlaybackManager implements Updateable {

    protected recorder: Recorder;
    protected recording: boolean;

    protected replayer: Replayer;
    protected playing: boolean;

    protected receiver: Receiver;

    constructor() {
        this.recorder = new Recorder();
        this.replayer = new Replayer();

        this.receiver = new Receiver();
        this.receiver.subscribe([GameEventType.START_RECORDING, GameEventType.STOP_RECORDING, GameEventType.PLAY_RECORDING]);
    }

    public update(deltaT: number): void {
        while (this.receiver.hasNextEvent()) {
            this.handleEvent(this.receiver.getNextEvent());
        }
        this.recorder.update(deltaT);
        this.replayer.update(deltaT);

        this.playing = this.replayer.active;
        this.recording = this.recorder.active;
    }


    protected handleEvent(event: GameEvent): void {
        switch(event.type) {
            case GameEventType.START_RECORDING: {
                this.handleStartRecordingEvent(event);
                break;
            }
            case GameEventType.STOP_RECORDING: {
                this.handleStopRecordingEvent();
                break;
            }
            case GameEventType.PLAY_RECORDING: {
                this.handlePlayRecordingEvent(event);
                break;
            }
        }
    }
    protected handleStartRecordingEvent(event: GameEvent): void {
        if (!this.playing) {
            this.recorder.startRecording(
                event.data.get("scene"), event.data.get("init"), event.data.get("seed"), event.data.get("size")
            );
            this.recording = this.recorder.active;
        }
    }
    protected handleStopRecordingEvent(): void {
        this.recorder.stopRecording();
        this.recording = this.recorder.active;
    }
    protected handlePlayRecordingEvent(event: GameEvent): void {
        if (!this.recording) {
            this.replayer.startReplay(this.recorder.recording, event.data.get("onEnd"));
            this.playing = this.replayer.active;
        }
    }
}

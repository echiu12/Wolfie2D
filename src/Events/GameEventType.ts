export enum GameEventType {
	/**
	 * Mouse Down event. Has data: {position: Vec2 - Mouse Position}
	 */
	MOUSE_DOWN = "mouse_down",
	/**
	 * Mouse Up event. Has data: {position: Vec2 - Mouse Position}
	 */
	MOUSE_UP = "mouse_up",
	/**
	 * Mouse Move event. Has data: {position: Vec2 - Mouse Position}
	 */
	MOUSE_MOVE = "mouse_move",

	/**
	 * Key Down event. Has data: {key: string - The key that is down}
	 */
	KEY_DOWN = "key_down",

	/**
	 * Key Up event. Has data: {key: string - The key that is up}
	 */
	KEY_UP = "key_up",

	/**
	 * Canvas Blur event. Has data: {}
	 */
	CANVAS_BLUR = "canvas_blur",

	/**
	 * Start Recording event. Has data: {}
	 */
	START_RECORDING = "start_recording",

	/**
	 * Stop Recording event. Has data: {}
	 */
	STOP_RECORDING = "stop_recording",
	
	/**
	 * Play Recording event. Has data: {}
	 */
	PLAY_RECORDING = "play_recording",

	/**
	 * Play Sound event. Has data: {key: string, loop: boolean, holdReference: boolean }
	 */
	PLAY_SOUND = "play_sound",

	/**
	 * Play Sound event. Has data: {key: string}
	 */
	STOP_SOUND = "stop_sound",

	/**
	 * Encompasses all event types. Used for receivers only.
	 */
	ALL = "all",
}
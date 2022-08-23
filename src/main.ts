import Game from "./Wolfie2D/Loop/Game";
import default_scene from "./default_scene";

// The main function is your entrypoint into Wolfie2D. Specify your first scene and any options here.
(function main(){
    // Run any tests
    runTests();

    // Set up options for our game
    let options = {
        canvasSize: {x: 192, y: 128},          // The size of the game
        clearColor: {r: 0, g: 0, b: 0},   // The color the game clears to
        inputs: [
            {name: "left", keys: ["a"]},
            {name: "right", keys: ["d"]},
            {name: "jump", keys: ["w", "space"]},
            {name: "run", keys: ["shift"]}
        ],
    }

    // Create a game with the options specified
    const game = new Game(options);

    // Start our game
    game.start(default_scene, {});

})();

function runTests(){};
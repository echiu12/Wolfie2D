import Game from "./Wolfie2D/Loop/Game";
import default_scene from "./default_scene";
import default_scene2 from "./default_scene2";
// import test from "./test.json";
import { TiledTilemapData } from "./Wolfie2D/DataTypes/Tilesets/TiledData";
import IsometricTilemap from "./Wolfie2D/Nodes/Tilemaps/IsometricTilemap";
import Vec2 from "./Wolfie2D/DataTypes/Vec2";
import Tileset from "./Wolfie2D/DataTypes/Tilesets/Tileset";
import Platformer from "./demos/Platformer";

// The main function is your entrypoint into Wolfie2D. Specify your first scene and any options here.
(function main(){
    // Run any tests
    runTests();

    // Set up options for our game
    let options = {
        canvasSize: {x: 1200, y: 800},          // The size of the game
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
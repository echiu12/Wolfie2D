import Shape from "../../DataTypes/Shapes/Shape";
import { TiledTilemapData, TiledLayerData } from "../../DataTypes/Tilesets/TiledData";
import Vec2 from "../../DataTypes/Vec2";
import Tilemap from "../Tilemap";


export default class IsometricTilemap extends Tilemap {
    public getMinColRow(origin: Vec2, bottomRight: Vec2): Vec2 {
        throw new Error("Method not implemented.");
    }
    public getMaxColRow(origin: Vec2, bottomRight: Vec2): Vec2 {
        throw new Error("Method not implemented.");
    }

    public override getWorldPosition(col: number, row: number): Vec2 {
        let vpx = this.scene.getViewport().getHalfSize().x;
        let x = Math.floor(this.scale.x * this.tileSize.x / 2 * (col - row) + vpx);
        let y = Math.floor(this.scale.y * this.tileSize.y / 2 * (col + row));
        return new Vec2(x, y);
    }

    public override getTilemapPosition(x: number, y: number): Vec2 {
        let vpx = this.scene.getViewport().getHalfSize().x;

        let col = Math.floor((x - vpx) / this.scale.x / this.tileSize.x + y / this.scale.y / this.tileSize.y);
        let row = Math.floor(y / this.scale.y / this.tileSize.y - (x - vpx) / this.scale.x / this.tileSize.x);
        return new Vec2(col, row);
    }

    public override getTileCollider(col: number, row: number): Shape {
        return;
    }

    protected parseTilemapData(tilemapData: TiledTilemapData, layer: TiledLayerData): void {
        // The size of the tilemap in local space
        this.numCols = tilemapData.width;
        this.numRows = tilemapData.height;

        // The size of tiles
        this.tileSize.set(tilemapData.tilewidth, tilemapData.tileheight);

        // The size of the tilemap on the canvas
        this.size.set(this.numCols * this.tileSize.x, this.numRows * this.tileSize.y);
        this.position.copy(this.size.scaled(0.5));
        this.data = layer.data;
        this.visible = layer.visible;

        // Whether the tilemap is collidable or not
        this.isCollidable = false;
        if(layer.properties){
            for(let item of layer.properties){
                if(item.name === "Collidable"){
                    this.isCollidable = item.value;

                    // Set all tiles besides "empty: 0" to be collidable
                    for(let i = 1; i < this.collisionMap.length; i++){
                        this.collisionMap[i] = true;
                    }
                }
            }
        }
    }
    
}
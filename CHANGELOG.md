# Wolfie2D Changelog
All notable changes to Wolfie2D will be documented here, for each major release. More recent releases will be kept toward the top of the file. Future releases will be included at the very top with target release dates and features. 

Releases post v0.2.0 *attempt* to follow [semver](https://semver.org/). Prior to v0.2.0 semver was not used for Wolfie2D. Version release dates are in the form `MM-DD-YYYY`. Release dates in the future should be interpreted as *target* release dates and are subject to change.

The changelog for Wolfie2D is based on the [this](https://keepachangelog.com/en/1.0.0/) changelog reference.

## v0.3.0 - 01-01-23
### Added
* Added 
* Added `StaggeredIsometricTilemap` class. This class officially adds support for staggered-isometric tilemaps in Wolfie2D.
* Added `TilemapOrientation` enum to the `TilemapFactory` class. 
* Added `IsometricTilemap` class. This class is incomplete for now.
* Added `astar` function to `GraphUtils.ts`. This function officially adds support for pathfinding wiith A* to Wolfie2D
* `LICENSE.md`
* `CHANGELOG.md`
* `BinaryHeapSet.ts`
* A testing framework, `ts-jest`, and sample unit tests for the `List.ts` class
* Scripts to `scripts` in `package.json`. This includes
    * `build` - compiles and builds the game-engine
    * `test` - runs ts-jest unit tests
* Compiler options to `tsconfig.json`

### Changes
* Several methods exposed by the OrthogonalTilemap class have been move up to the Tilemap class, including:
  - numRows
  - numCols
  - getDimensions()
  - isTileCollidable(col, row)
* Added abstract methods to the abstract Tilemap class.
  - getWorldPosition(col, row)
  - getTilemapPosition(x, y)
  - getTileCollider(col, row)
  - getMinColRow(upperLeft, bottomRight)
  - getMaxColRow(upperLeft, bottomRight)
* BasicPhysicsManager calls the newly exposed methods in the abstract Tilemap class. 
  - getMinColRow and getMaxColRow to determine which tiles to check for collisions
  - getTileCollider(col, row) to get the collision shape for a tile in a tilemap
* Replaced `renderOrthogonalTilemap` method with `renderTilemap` method inside of the `TilemapRenderer` class. 
* Moved `Collection.ts` to `Interfaces` folder
* Moved all datatypes implementing the `Collection` interface to `Collections` folder. This includes
    * BinaryHeapSet.ts
    * List.ts
    * Map.ts
    * QuadTree.ts
    * Queue.ts
    * RegionQuadTree.ts
    * Stack.ts
* Moved Wolfie2D project to the Wolfie2D organization account on Github


## v0.2.0 - 05-20-2022
Wolfie2D v0.2.0 includes additions to the game-engine that were made by Zach Grandison from May 2021 - May 2022. 

## v0.1.0 - 05-20-2021
Wolfie2D v0.1.0 includes the foundation of the game-engine that were made by Joe Weaver from May 2020 - May 2021. 


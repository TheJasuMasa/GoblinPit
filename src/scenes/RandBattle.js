import { PATHS } from "../pathDefs";
import testMap from "../maps/testMap.json";
import { combatUI } from "./combatUI";
import EventDispatcher from "../utils/sceneDataHandle";

export class RandBattle extends Phaser.Scene {
  constructor() {
    super("RandBattle");
  }

  preload() {
    // Preloads the tileset pngs
    this.load.image("PreTiles", `${PATHS.tiles}/tileBoi.png`);
    this.load.image("PreWalls", `${PATHS.tiles}/wallBoi.png`);
    this.load.image("tileMarker", `${PATHS.UI}/tileMarkerNew2.png`);

    // Preloads the map.json created in Tiled
    this.load.tilemapTiledJSON("testMap", testMap);

    // Preloads spritesheets for character animations
    this.load.spritesheet(
      "spleegakSheet",
      `${PATHS.sprites}/spleegakSheet.png`,
      {
        frameWidth: 60,
        frameHeight: 60,
        endFrame: 2,
        margin: 2,
        spacing: 2,
      }
    );

    //Preloads secret fun stuff
    this.load.audio("GT", `${PATHS.music}/GT.mp3`);
  }

  create() {

    this.GT = this.sound.add("GT");
    this.GT.play();
    //// ----- TILES/TERRAIN ------ ////
    // Constructs the map
    this.currentMap = this.make.tilemap({
      key: "testMap",
      tileWidth: 64,
      tileHeight: 32,
    });
    // Defines the tileset images and aligns their keys for the map
    this.tileset = this.currentMap.addTilesetImage("tiles", "PreTiles");
    this.tileset2 = this.currentMap.addTilesetImage("walls", "PreWalls");
    
    // Defines the layers and aligns their keys with tilesets
    this.layer1 = this.currentMap.createLayer("floorLayer", [this.tileset], 0, 0);
    this.layer2 = this.currentMap.createLayer("wallLayer", [this.tileset2], 0, 0);
    this.currentMap.setLayer(this.layer1)
    
    
    // Increases the vision level
    this.cameras.main.zoom = 2;

    //// ----- TILE MARKER ----- ////
    this.tileMarker = this.add.image(0, 0, "tileMarker");
    this.tileMarker.setDepth(1)

    // Spleegak Rocking out
    let config = {
      key: "spleegakSheetAnim",
      frames: this.anims.generateFrameNumbers("spleegakSheet", {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    };

    this.anims.create(config);

    // this.add.sprite(350, 265, "spleegakSheet").play("spleegakSheetAnim");
    this.scene.launch("combatUI",this.config);

    this.registry.set('currentMap',this.currentMap)
  }



  update() {
    // Returns coordinates of cursor relative to camera
    var worldPointer = this.input.activePointer.positionToCamera(
      this.cameras.main
    );
    // Takes worldPointer coordinates and translates them to tile index
    var pointerTile = this.currentMap.worldToTileXY(
      worldPointer.x,
      worldPointer.y + 16,
      true
    );
    
      

    // Takes tile index and translates it to global coordinates
    var tileCoords = this.currentMap.tileToWorldXY(
      pointerTile.x,
      pointerTile.y
    );

    // Updates tile marker to follow cursor positions
    this.tileMarker.x = tileCoords.x;
    this.tileMarker.y = tileCoords.y;
  }
}

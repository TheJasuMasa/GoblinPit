import { PATHS } from "../pathDefs";
import testMap from "../maps/testMap.json";

export class RandBattle extends Phaser.Scene {
  constructor() {
    super("RandBattle");
  }

  preload() {
    // Preloads the tileset pngs
    this.load.image("PreTiles", `${PATHS.tiles}/tileBoi.png`);
    this.load.image("PreHills", `${PATHS.tiles}/hillBoi.png`);
    this.load.image("PreWalls", `${PATHS.tiles}/wallBoi.png`);
    this.load.image("tileMarker", `${PATHS.UI}/tileMarkerNew2.png`);

    // Preloads the map.json created in Tiled
    this.load.tilemapTiledJSON("testMap", testMap);

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
    this.tileset4 = this.currentMap.addTilesetImage('hills', "PreTiles")
    this.tileset2 = this.currentMap.addTilesetImage("walls", "PreWalls");
    this.tileset3 = this.currentMap.addTilesetImage('hills', "PreHills")
    
  
    // Defines the layers and aligns their keys with tilesets
    this.layer1 = this.currentMap.createLayer("floorLayer", [this.tileset], 0, 0);
    this.layer4 = this.currentMap.createLayer("hillLayerBehind", [this.tileset4], 0, 0)
    this.layer2 = this.currentMap.createLayer("wallLayer", [this.tileset2], 0, 0);
    this.layer3 = this.currentMap.createLayer("hillLayer", [this.tileset3], 0, 0);
    
    this.currentMap.setLayer(this.layer1)


    this.scene.launch("combatUI",this.config);

    this.registry.set('currentMap',this.currentMap)
  }



  update() {
  }
}

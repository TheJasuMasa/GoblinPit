import { ASSET_PATH, MAP_PATH } from "./pathDefs";
import testMap from './maps/testMap.json'
import { combatUI } from "./combatUI";


export class RandBattle extends Phaser.Scene {

    constructor(){
        super('RandBattle')
    }

    

    preload(){
        // Preloads the tileset pngs
        this.load.image('PreTiles',`${ASSET_PATH}/tileBoi.png`)
        this.load.image('PreWalls',`${ASSET_PATH}/wallBoi.png`)
        this.load.image('tileMarker',`${ASSET_PATH}/tileMarker.png`)

        // Preloads the map.json created in Tiled
        this.load.tilemapTiledJSON('testMap', testMap) 

        // Preloads spritesheets for character animations
        this.load.spritesheet('spleegakSheet',`${ASSET_PATH}/spleegakSheet.png`,{frameWidth:60,frameHeight:60,endFrame:2,margin:2,spacing:2})
        this.load.spritesheet('testGobboSpritesheet',`${ASSET_PATH}/testGobboSpritesheet.png`,{frameWidth:33,frameHeight:33,endFrame:2,margin:1,spacing:1})
    }

    create(){
        
        //// ----- TILES/TERRAIN ------ ////
        // Constructs the map
        this.map = this.make.tilemap({key: "testMap", tileWidth: 64, tileHeight: 32}) 
        // Defines the tileset images and aligns their keys for the map
        const tileset = this.map.addTilesetImage('tiles','PreTiles')
        const tileset2 = this.map.addTilesetImage('walls','PreWalls')
        // Defines the layers and aligns their keys with tilesets
        this.layer1 = this.map.createLayer("floorLayer",[tileset],0,0)
        this.layer2 = this.map.createLayer("wallLayer",[tileset2],0,0)
        // Increases the vision level
        this.cameras.main.zoom = 2
        
        //// ----- TILE MARKER ----- ////
        this.tileMarker = this.add.image(0,0,'tileMarker')

        //// ----- SPRITES AND ANIMATIONS ----- ////
        // Chunky gobbo animation
        let idle = {
            key: 'testGobboSpritesheetAnim',
            frames: this.anims.generateFrameNumbers('testGobboSpritesheet',{start:0,end:1}),
            frameRate: 3,
            repeat: -1
        };
        let idle2 = {
            key: 'testGobboSpritesheetAnim2',
            frames: this.anims.generateFrameNumbers('testGobboSpritesheet',{start:1,end:0}),
            frameRate: 3,
            repeat: -1,
            
        };
    
        // Spleegak Rocking out
        let config = {
            key: 'spleegakSheetAnim',
            frames: this.anims.generateFrameNumbers('spleegakSheet',{start:0,end:1}),
            frameRate: 3,
            repeat: -1
        };

        this.anims.create(idle)
        this.anims.create(idle2)
        this.anims.create(config);

        this.add.sprite(320,340,'testGobboSpritesheet').play('testGobboSpritesheetAnim')
        this.add.sprite(380,340,'testGobboSpritesheet').play('testGobboSpritesheetAnim2')
        this.add.sprite(350,265 ,'spleegakSheet').play('spleegakSheetAnim')

        this.scene.launch('combatUI')
    }

    update(){
        // Returns coordinates of cursor relative to camera
        var worldPointer = this.input.activePointer.positionToCamera(this.cameras.main)
        // Takes worldPointer coordinates and translates them to tile index
        var pointerTile = this.map.worldToTileXY(worldPointer.x,worldPointer.y+16,true)
        // Takes tile index and translates it to global coordinates
        var tileCoords = this.map.tileToWorldXY(pointerTile.x,pointerTile.y)

        // Updates tile marker to follow cursor positions
        this.tileMarker.x = tileCoords.x
        this.tileMarker.y = tileCoords.y
        

        
        
        
        
    }
}
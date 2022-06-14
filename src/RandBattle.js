import { ASSET_PATH, MAP_PATH } from "./pathDefs";
import testMap from './maps/testMap.json'

export class RandBattle extends Phaser.Scene {
    constructor(){
        super('RandBattle')
    }

    preload(){
        this.load.image('PreTiles',`${ASSET_PATH}/tileBoi.png`)
        this.load.image('PreWalls',`${ASSET_PATH}/wallBoi.png`)
        this.load.tilemapTiledJSON('testMap', testMap) 

        this.load.spritesheet('spleegakSheet',`${ASSET_PATH}/spleegakSheet.png`,{frameWidth:60,frameHeight:60,endFrame:2,margin:2,spacing:2})
        this.load.spritesheet('testGobboSpritesheet',`${ASSET_PATH}/testGobboSpritesheet.png`,{frameWidth:33,frameHeight:33,endFrame:2,margin:1,spacing:1})
    }

    create(){
        const map = this.make.tilemap({key: "testMap", tileWidth: 64, tileHeight: 32})
        const tileset = map.addTilesetImage('tiles','PreTiles')
        const tileset2 = map.addTilesetImage('walls','PreWalls')
        const layer = map.createLayer("Tile Layer 1",[tileset,tileset2],0,0)

    
        let idle = {
            key: 'testGobboSpritesheetAnim',
            frames: this.anims.generateFrameNumbers('testGobboSpritesheet',{start:0,end:1}),
            frameRate: 3,
            repeat: -1
        };
    

        let config = {
            key: 'spleegakSheetAnim',
            frames: this.anims.generateFrameNumbers('spleegakSheet',{start:0,end:1}),
            frameRate: 3,
            repeat: -1
        };

        this.anims.create(idle)
        this.anims.create(config);
        this.add.sprite(300,350,'testGobboSpritesheet').play('testGobboSpritesheetAnim')
        this.add.sprite(400,300,'spleegakSheet').play('spleegakSheetAnim')
    
    }

    update(){
        
    }
}
import { ASSET_PATH } from "./pathDefs";
import math from 'mathjs';

export class RandBattle extends Phaser.Scene {
    constructor(){
        super('RandBattle')
    }

    preload(){
        this.load.image("testArena", `${ASSET_PATH}/testArena.png`);
        this.load.spritesheet('spleegakSheet',`${ASSET_PATH}/spleegakSheet.png`,{frameWidth:60,frameHeight:60,endFrame:2,margin:2,spacing:2})
    }

    create(){
        this.testArena = this.add.image(400,300, "testArena");
        let config = {
            key: 'spleegakSheetAnim',
            frames: this.anims.generateFrameNumbers('spleegakSheet',{start:0,end:1}),
            frameRate: 3,
            repeat: -1
        };

        this.anims.create(config);
        this.add.sprite(400,300,'spleegakSheet').play('spleegakSheetAnim')
    
    }

    update(){
        
    }
}
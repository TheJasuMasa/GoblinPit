import { ASSET_PATH } from "./pathDefs";
import math from 'mathjs';

export class TitleScreen extends Phaser.Scene {
    constructor(){
        super('titleScreen')

        
    }
    
    moveCloud(cloud, speed){
        cloud.x += speed
        if (cloud.x > 870){
            cloud.x = -70
            cloud.y = this.setCloudY(20, 70)
        }
    }

    setCloudY(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    preload() {
        this.load.audio("RNB", `${ASSET_PATH}/RNB.mp3`)
        this.load.image("sky", `${ASSET_PATH}/skybox800x600.png`);
        this.load.image("cloud1", `${ASSET_PATH}/cloud1.png`);
    }

    create() {
        this.RNB = this.sound.add('RNB')
        this.RNB.play()
        this.add.image(400, 300, "sky");
        this.cloud1 = this.add.image(650, 25, "cloud1");
        this.cloud2 = this.add.image(400, 50, "cloud1");
        this.cloud3 = this.add.image(175, 30, "cloud1");
        this.cloud4 = this.add.image(50, 60, "cloud1");
        this.add.text(350, 250, "Goblin Pit", { font: "30px Arial", fill: "black" });
    }

    
    update(){
          this.moveCloud(this.cloud1, .51)
          this.moveCloud(this.cloud2, .51)
          this.moveCloud(this.cloud3, .51)
          this.moveCloud(this.cloud4, .51)
    }
}

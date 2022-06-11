import { ASSET_PATH } from "./pathDefs";
import math from 'mathjs';

export class TitleScreen extends Phaser.Scene {
    constructor(){
        super('titleScreen')

        
    }
    
    panBegin = false

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
        this.sky = this.add.image(400, 300, "sky");
        this.cloud1 = this.add.image(650, 25, "cloud1");
        this.cloud2 = this.add.image(400, 50, "cloud1");
        this.cloud3 = this.add.image(175, 30, "cloud1");
        this.cloud4 = this.add.image(50, 60, "cloud1");

        // Cheaper and worse way to go about the staggered fading titles
        const title = this.add.text(350, 250, "Goblin Pit", { font: "30px Arial", fill: "black" });
        const creditOne = this.add.text(300,300,'Justin Smith',{font: '24px Arial',fill: "black"});
        const creditTwo = this.add.text(400,350,'Brian Romer',{font: '24px Arial',fill: "black"});

        this.add.text(350,1000, 'Fuck',{ font: "40px Arial", fill: "black" })

        // const titleCard = [this.add.text(350, 250, "Goblin Pit", { font: "30px Arial", fill: "black" }),
        //             this.add.text(300,300,'Justin Smith',{font: '24px Arial',fill: "black"}),
        //             this.add.text(350,350,'Brian Romer',{font: '24px Arial',fill: "black"})] 

        //             //  Could be used to shorten the tweens below into one if we can figure out how to stagger
        //             //  them through a single instantiation, supposedly you can pass in some kind of function to 
        //             //  delay and duration but there's almost no info on how this works.

        let fadeInTitle = this.tweens.add({
            targets:title, // Tweens can take an array for multiple values but I can't figure out how to alternate their delay/duration
            ease:'Linear',
            duration:2000,
            delay: 1000,
            alpha: {start: 0, to: 1}
        });
        let fadeInCreditsOne = this.tweens.add({
            targets:creditOne, // Tweens can take an array for multiple values but I can't figure out how to alternate their delay/duration
            ease:'Linear',
            duration:2000,
            delay: 3000,
            alpha: {start: 0, to: 1}
        });
        let fadeInCreditsTwo = this.tweens.add({
            targets:creditTwo, // Tweens can take an array for multiple values but I can't figure out how to alternate their delay/duration
            ease:'Linear',
            duration:2000,
            delay: 3500,
            alpha: {start: 0, to: 1}
        });

        



        this.cameras.main.fadeIn(1000) // Fades in camera at the start

        setTimeout(() => {this.panBegin=true},7000) // sets value to true in order to pan screen downward from title 
    }


    update(){
          this.moveCloud(this.cloud1, .51)
          this.moveCloud(this.cloud2, .51)
          this.moveCloud(this.cloud3, .51)
          this.moveCloud(this.cloud4, .51)
          this.cameras.main.scrollY < 600 ? this.panBegin ? this.cameras.main.scrollY+=1 : '': ''; // pans screen downward when true
          
       
       
        
        
        
    }
}

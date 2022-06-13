import { ASSET_PATH } from "./pathDefs";
import { RandBattle } from "./RandBattle";
import math from "mathjs";

export class TitleScreen extends Phaser.Scene {
  constructor() {
    super("titleScreen");
  }

  panBegin = false;

  moveImage(image, speedX, speedY) {
    image.x += speedX;
    image.y += speedY;
    if (image.x > 870) {
      image.x = -70;
      image.y = this.setCloudY(20, 70);
    }
  }

  setCloudY(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  preload() {
    this.load.audio("RNB", `${ASSET_PATH}/RNB.mp3`);
    this.load.image("sky", `${ASSET_PATH}/skybox800x600.png`);
    this.load.image("cloud1", `${ASSET_PATH}/cloud1.png`);
    this.load.image("dahpit", `${ASSET_PATH}/dahpit.png`);
    this.load.image("bHead", `${ASSET_PATH}/bHead.png`);
    this.load.image("jHead", `${ASSET_PATH}/jHead.png`);
    this.load.image("onlookingBois", `${ASSET_PATH}/onlookingBois.png`);
    this.load.image("enterButton", `${ASSET_PATH}/enterButton.png`);
    this.load.image("selector", `${ASSET_PATH}/selector.png`);
  }

  create() {
    this.RNB = this.sound.add("RNB");
    this.RNB.play();
    this.sky = this.add.image(400, 900, "sky");
    this.cloud1 = this.add.image(650, 25, "cloud1");
    this.cloud2 = this.add.image(400, 50, "cloud1");
    this.cloud3 = this.add.image(175, 30, "cloud1");
    this.cloud4 = this.add.image(50, 60, "cloud1");
    this.dahpit = this.add.image(400, 1500, "dahpit");
    this.jHead = this.add.image(800, 1400, "jHead");
    this.bHead = this.add.image(100, 2200, "bHead");
    this.onlookingBois = this.add.image(400, 1700, "onlookingBois");
    this.enterButton = this.add.image(400, 1700, "enterButton");
    this.selector = this.add.image(400, 1750, "selector");

    const tween = this.tweens.add({
      targets: this.onlookingBois,
      y: 1750,
      ease: "Power0",
      duration: 500,
      yoyo: true,
      repeat: -1,
    });

    // Cheaper and worse way to go about the staggered fading titles
    // const title = this.add.text(350, 250, "Goblin Pit", { font: "30px Arial", fill: "black" });
    const creditOne = this.add.text(300, 300, "Justin Smith", {
      font: "24px Arial",
      fill: "black",
    });
    const creditTwo = this.add.text(400, 350, "Brian Romer", {
      font: "24px Arial",
      fill: "black",
    });

    // const titleCard = [this.add.text(350, 250, "Goblin Pit", { font: "30px Arial", fill: "black" }),
    //             this.add.text(300,300,'Justin Smith',{font: '24px Arial',fill: "black"}),
    //             this.add.text(350,350,'Brian Romer',{font: '24px Arial',fill: "black"})]

    //             //  Could be used to shorten the tweens below into one if we can figure out how to stagger
    //             //  them through a single instantiation, supposedly you can pass in some kind of function to
    //             //  delay and duration but there's almost no info on how this works.

    // let fadeInTitle = this.tweens.add({
    //     targets:title, // Tweens can take an array for multiple values but I can't figure out how to alternate their delay/duration
    //     ease:'Linear',
    //     duration:2000,
    //     delay: 1000,
    //     alpha: {start: 0, to: 1}
    // });

    let fadeInCreditsOne = this.tweens.add({
      targets: creditOne, // Tweens can take an array for multiple values but I can't figure out how to alternate their delay/duration
      ease: "Linear",
      duration: 2000,
      delay: 3000,
      alpha: { start: 0, to: 1 },
    });
    let fadeInCreditsTwo = this.tweens.add({
      targets: creditTwo, // Tweens can take an array for multiple values but I can't figure out how to alternate their delay/duration
      ease: "Linear",
      duration: 2000,
      delay: 4200,
      alpha: { start: 0, to: 1 },
    });

    this.cameras.main.fadeIn(1000); // Fades in camera at the start

    setTimeout(() => {
      this.panBegin = true;
    }, 10000); // sets value to true in order to pan screen downward from title

    const particles = this.add.particles(); // DO BLOOD PARTICLES LATER
  }

  update() {
    // Moves dah pwetty widdle clouds
    this.moveImage(this.cloud1, 0.51, 0);
    this.moveImage(this.cloud2, 0.51, 0);
    this.moveImage(this.cloud3, 0.51, 0);
    this.moveImage(this.cloud4, 0.51, 0);

    // Too lazy to change the image size
    this.jHead.setScale(0.5);
    this.bHead.setScale(0.5);

    // Throws and rotates our heads
    this.moveImage(this.jHead, -3, -7);
    this.jHead.rotation -= 0.12;
    this.moveImage(this.bHead, 2, -7.25);
    this.bHead.rotation += 0.12;

    // Pans the screen downward when true
    this.cameras.main.scrollY < 1200
      ? this.panBegin
        ? (this.cameras.main.scrollY += 1)
        : ""
      : "";

    // Starts the next scene by pressing the Enter key, scene.start will also shutdown the current scene
    // use scene.launch in order to run scenes paralell
    if (this.input.keyboard.addKey("ENTER").isDown) {
      this.scene.start("RandBattle");
    }
  }
}

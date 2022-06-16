import { PATHS } from "../pathDefs";
import { Goblin } from "../wutGobbosIz";
import { getRandomIndex } from "../utils/random";

export class combatUI extends Phaser.Scene {
  constructor() {
    super("combatUI");
  }

  gobboDef() {
    this.chung = new Goblin(
      { hp: 12, str: 3, skil: 1, deft: 1, tgh: 4 },
      "arms innit",
      Goblin.goblinBodyTypes[getRandomIndex(Goblin.goblinBodyTypes)],
      Goblin.goblinHeadTypes[getRandomIndex(Goblin.goblinHeadTypes)],
      [16, 6]
    );
    console.log(this.chung);
    this.grung = new Goblin(
      { hp: 14, str: 5, skil: 2, deft: 2, tgh: 2 },
      "arms innit",
      Goblin.goblinBodyTypes[getRandomIndex(Goblin.goblinBodyTypes)],
      Goblin.goblinHeadTypes[getRandomIndex(Goblin.goblinHeadTypes)],
      [17, 5]
    );
    console.log(this.grung);
  }

  moveSprite(direction, target) {
    if (direction == "left") {
      target.xPos -= 1;
    } else if (direction == "right") {
      target.xPos += 1;
    } else if (direction == "up") {
      target.yPos -= 1;
    } else if (direction == "down") {
      target.yPos += 1;
    }
  }

  bite(attacker, defender) {
    // Very simple damage formula
    let damageDone = attacker.stats.str + 1 - defender.stats.tgh;
    defender.stats.hp -= damageDone;
    // Damage number popup above defender's head
    let damageText = this.add.text(380, 330, "-" + damageDone.toString(), {
      font: "16px Arial",
      color: "#8b0000",
      shadow: { color: "#000" },
    });
    // Fades out damage numbers in 2.5 seconds
    let fadeOutDamage = this.tweens.add({
      targets: damageText,
      ease: "Linear",
      duration: 2000,
      delay: 500,
      alpha: { start: 1, to: 0 },
    });
    console.log("CHOMP");
    console.log(defender.stats.hp);
  }

  preload() {
    this.gobboDef();
    this.load.image(
      "combatTestButtonBite",
      `${PATHS.UI}/combatTestButtonBite.png`
    );
    this.load.audio("mysterySound", `${PATHS.sfx}/wetFart1.wav`);

    // Temporary place for stitching goblin parts together
    this.load.spritesheet("gobBody1", this.chung.bodySprite, {
      frameWidth: 33,
      frameHeight: 33,
      endFrame: 2,
      margin: 1,
      spacing: 1,
    });
    this.load.spritesheet("gobHead1", this.chung.headSprite, {
      frameWidth: 33,
      frameHeight: 33,
      endFrame: 2,
      margin: 1,
      spacing: 1,
    });
    this.load.spritesheet("gobHead2", this.grung.headSprite, {
      frameWidth: 33,
      frameHeight: 33,
      endFrame: 2,
      margin: 1,
      spacing: 1,
    });
    this.load.spritesheet("gobBody2", this.grung.bodySprite, {
      frameWidth: 33,
      frameHeight: 33,
      endFrame: 2,
      margin: 1,
      spacing: 1,
    });
  }

  create() {
    this.currentMap = this.make.tilemap({
      key: "testMap",
      tileWidth: 64,
      tileHeight: 32,
    });

    this.WF = this.sound.add("mysterySound");

    // Creates an interactive button
    this.testButtonImage = this.add
      .image(350, 400, "combatTestButtonBite")
      .setInteractive();

    // When clicked, the test button will execute the bite function and play the wet fart noise.
    this.testButtonImage.on("pointerdown", () =>
      this.bite(this.chung, this.grung)
    );
    this.testButtonImage.on("pointerdown", () => this.WF.play());

    // Temporary place for animating stiched together gobbos
    let idle1 = {
      key: "gobBody1Anim",
      frames: this.anims.generateFrameNumbers("gobBody1", {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    };
    let idle2 = {
      key: "gobBody2Anim",
      frames: this.anims.generateFrameNumbers("gobBody2", {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    };
    let idle3 = {
      key: "gobHead1Anim",
      frames: this.anims.generateFrameNumbers("gobHead1", {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    };
    let idle4 = {
      key: "gobHead2Anim",
      frames: this.anims.generateFrameNumbers("gobHead2", {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    };

    this.anims.create(idle1);
    this.anims.create(idle2);
    this.anims.create(idle3);
    this.anims.create(idle4);

    // Actually places the sprite graphics, tileToWorldXY is used to get the xPos and yPos of any given creature instance and change to world coordinates.
    this.chungBody = this.add
      .sprite(
        this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).x,
        this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).y - 16,
        "gobBody1"
      )
      .play("gobBody1Anim")
      .setScale(1.25);
    this.chungHead = this.add
      .sprite(
        this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).x,
        this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).y - 16,
        "gobHead1"
      )
      .play("gobHead1Anim")
      .setScale(1.25);
    this.grungBody = this.add
      .sprite(
        this.currentMap.tileToWorldXY(this.grung.xPos, this.grung.yPos).x,
        this.currentMap.tileToWorldXY(this.grung.xPos, this.grung.yPos).y - 16,
        "gobBody2"
      )
      .play("gobBody2Anim")
      .setFlip(true, false)
      .setScale(1.25);
    this.grungHead = this.add
      .sprite(
        this.currentMap.tileToWorldXY(this.grung.xPos, this.grung.yPos).x,
        this.currentMap.tileToWorldXY(this.grung.xPos, this.grung.yPos).y - 16,
        "gobHead2"
      )
      .play("gobHead2Anim")
      .setFlip(true, false)
      .setScale(1.25);

    this.cameras.main.zoom = 2;

    this.input.keyboard.on("keydown-LEFT", () =>
      this.moveSprite("left", this.chung)
    );
    this.input.keyboard.on("keydown-RIGHT", () =>
      this.moveSprite("right", this.chung)
    );
    this.input.keyboard.on("keydown-UP", () =>
      this.moveSprite("up", this.chung)
    );
    this.input.keyboard.on("keydown-DOWN", () =>
      this.moveSprite("down", this.chung)
    );
  }

  update() {
    this.chungBody.x = this.currentMap.tileToWorldXY(
      this.chung.xPos,
      this.chung.yPos
    ).x;
    this.chungBody.y =
      this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).y - 16;
    this.chungHead.x = this.currentMap.tileToWorldXY(
      this.chung.xPos,
      this.chung.yPos
    ).x;
    this.chungHead.y =
      this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).y - 16;
  }
}

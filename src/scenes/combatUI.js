import { PATHS } from "../pathDefs";
import { Goblin } from "../wutGobbosIz";
import { getRandomIndex } from "../utils/random";
import { RandBattle } from "./RandBattle";
import sceneDataHandler from "../utils/sceneDataHandle";
import OutlinePipelinePlugin from "phaser3-rex-plugins/plugins/outlinepipeline-plugin.js";

export class combatUI extends Phaser.Scene {
  constructor() {
    super("combatUI");
  }

  gobboDef() {
    this.chung = new Goblin(
      { hp: 12, str: 3, skil: 1, deft: 1, tgh: 4, ap: 3 },
      "arms innit",
      Goblin.goblinBodyTypes[getRandomIndex(Goblin.goblinBodyTypes)],
      Goblin.goblinHeadTypes[getRandomIndex(Goblin.goblinHeadTypes)],
      [16, 6]
    );
    console.log(this.chung);
    this.grung = new Goblin(
      { hp: 14, str: 5, skil: 2, deft: 2, tgh: 2, ap: 3 },
      "arms innit",
      Goblin.goblinBodyTypes[getRandomIndex(Goblin.goblinBodyTypes)],
      Goblin.goblinHeadTypes[getRandomIndex(Goblin.goblinHeadTypes)],
      [17, 5]
    );
    console.log(this.grung);
  }

  // Insanely poorly designed method of displaying where a goblin can move
  // based 1:1 on their 'ap'
  selectGobbo(target) {
    this.movementGrid = this.add.renderTexture(0, 0, 32, 64).setInteractive();
    for (let i = 0; i < target.stats.ap; i++) {
      this.movementGrid.draw(
        this.add.image(
          this.currentMap.tileToWorldXY(target.xPos - (i + 1), target.yPos).x,
          this.currentMap.tileToWorldXY(target.xPos, target.yPos - (i + 1)).y,
          "movementIndicator"
        )
      );
      this.movementGrid.draw(
        this.add.image(
          this.currentMap.tileToWorldXY(target.xPos + (i + 1), target.yPos).x,
          this.currentMap.tileToWorldXY(target.xPos, target.yPos + (i + 1)).y,
          "movementIndicator"
        )
      );
      this.movementGrid.draw(
        this.add.image(
          this.currentMap.tileToWorldXY(target.xPos + (i + 1), target.yPos).x,
          this.currentMap.tileToWorldXY(target.xPos, target.yPos - (i + 1)).y,
          "movementIndicator"
        )
      );
      this.movementGrid.draw(
        this.add.image(
          this.currentMap.tileToWorldXY(target.xPos - (i + 1), target.yPos).x,
          this.currentMap.tileToWorldXY(target.xPos, target.yPos + (i + 1)).y,
          "movementIndicator"
        )
      );
      if (i > 0) {
        this.movementGrid.draw(
          this.add.image(
            this.currentMap.tileToWorldXY(target.xPos - i, target.yPos + 1).x,
            this.currentMap.tileToWorldXY(target.xPos - i, target.yPos + 1).y,
            "movementIndicator"
          )
        );
        this.movementGrid.draw(
          this.add.image(
            this.currentMap.tileToWorldXY(target.xPos - i, target.yPos - 1).x,
            this.currentMap.tileToWorldXY(target.xPos - i, target.yPos - 1).y,
            "movementIndicator"
          )
        );
        this.movementGrid.draw(
          this.add.image(
            this.currentMap.tileToWorldXY(target.xPos - 1, target.yPos - i).x,
            this.currentMap.tileToWorldXY(target.xPos - 1, target.yPos - i).y,
            "movementIndicator"
          )
        );
        this.movementGrid.draw(
          this.add.image(
            this.currentMap.tileToWorldXY(target.xPos + 1, target.yPos - i).x,
            this.currentMap.tileToWorldXY(target.xPos + 1, target.yPos - i).y,
            "movementIndicator"
          )
        );
        this.movementGrid.draw(
          this.add.image(
            this.currentMap.tileToWorldXY(target.xPos + i, target.yPos - 1).x,
            this.currentMap.tileToWorldXY(target.xPos + i, target.yPos - 1).y,
            "movementIndicator"
          )
        );
        this.movementGrid.draw(
          this.add.image(
            this.currentMap.tileToWorldXY(target.xPos + 1, target.yPos + i).x,
            this.currentMap.tileToWorldXY(target.xPos + 1, target.yPos + i).y,
            "movementIndicator"
          )
        );
        this.movementGrid.draw(
          this.add.image(
            this.currentMap.tileToWorldXY(target.xPos - 1, target.yPos + i).x,
            this.currentMap.tileToWorldXY(target.xPos - 1, target.yPos + i).y,
            "movementIndicator"
          )
        );
        this.movementGrid.draw(
          this.add.image(
            this.currentMap.tileToWorldXY(target.xPos + i, target.yPos + 1).x,
            this.currentMap.tileToWorldXY(target.xPos + i, target.yPos + 1).y,
            "movementIndicator"
          )
        );
      }
    }
    target.selected = true;
  }

  // Clicking after selecting a gobbo will move it to the tile under the
  // cursor and update it's position. Can' deselect a gobbo tho, and the graphics persist.
  movementConfirm(target) {
    if (target.selected == true) {
      var worldPointer = this.input.activePointer.positionToCamera(
        this.cameras.main
      );
      var pointerTile = this.currentMap.worldToTileXY(
        worldPointer.x,
        worldPointer.y + 16,
        true
      );
      target.xPos = pointerTile.x;
      target.yPos = pointerTile.y;
    }
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

  animIdle(newKey, spritesheetKey) {
    let idle = {
      key: newKey,
      frames: this.anims.generateFrameNumbers(spritesheetKey, {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    };
    this.anims.create(idle);
  }

  preload() {
    this.gobboDef();
    this.load.image(
      "combatTestButtonBite",
      `${PATHS.UI}/combatTestButtonBite.png`
    );
    this.load.image("movementIndicator", `${PATHS.UI}/tileMarker.png`);
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
    // Defines the outline plugin for ease of use
    let postFxPlugin = this.plugins.get("rexOutlinePipeline");

    // Pulls the data for the map created in RandBattle to be used here
    this.currentMap = this.registry.get("currentMap");

    this.WF = this.sound.add("mysterySound");

    // Creates an interactive button
    this.testButtonImage = this.add
      .image(350, 400, "combatTestButtonBite")
      .setInteractive()
      .setDepth(2);

    // When clicked, the test button will execute the bite function and play the wet fart noise.
    this.testButtonImage.on("pointerdown", () =>
      this.bite(this.chung, this.grung)
    );
    this.testButtonImage.on("pointerdown", () => this.WF.play());

    // New animation creation function, just need to input your own custom key
    // followed by the spritesheet name. Still have to call .play('newKey') on sprite objects tho
    this.animIdle("gobBody1Anim", "gobBody1");
    this.animIdle("gobHead1Anim", "gobHead1");
    this.animIdle("gobBody2Anim", "gobBody2");
    this.animIdle("gobHead2Anim", "gobHead2");

    // Actually places the sprite graphics, tileToWorldXY is used to get the xPos and yPos of any given creature instance and change to world coordinates.
    this.chungBody = this.add
      .sprite(0, 0, "gobBody1")
      .play("gobBody1Anim")
      .setScale(1.25)
      .setInteractive()
      .setDepth(1);

    this.chungHead = this.add
      .sprite(0, 0, "gobHead1")
      .play("gobHead1Anim")
      .setScale(1.25)
      .setInteractive()
      .setDepth(1);

    this.grungBody = this.add
      .sprite(
        this.currentMap.tileToWorldXY(this.grung.xPos, this.grung.yPos).x,
        this.currentMap.tileToWorldXY(this.grung.xPos, this.grung.yPos).y - 16,
        "gobBody2"
      )
      .play("gobBody2Anim")
      .setFlip(true, false)
      .setScale(1.25)
      .setInteractive()
      .setDepth(1);

    this.grungHead = this.add
      .sprite(
        this.currentMap.tileToWorldXY(this.grung.xPos, this.grung.yPos).x,
        this.currentMap.tileToWorldXY(this.grung.xPos, this.grung.yPos).y - 16,
        "gobHead2"
      )
      .play("gobHead2Anim")
      .setFlip(true, false)
      .setScale(1.25)
      .setDepth(1);

    // Putting Gobbo sprites in an array to put into a container.
    this.sprites = [];
    this.sprites.push(this.chungHead, this.chungBody);
    // Containe is useful because the outline plugin will work correctly on it. And other stuff, I dunno.
    this.containerboi = this.add.container();
    this.containerboi.add(this.sprites);
    this.containerboi.setDepth(1);

    // Combines both the body and head sprites into one object called 'stitch'
    // Doesn't need an x,y set here as it's constantly updated, second set of
    // nums is width and height of bounding box.
    this.stitch = this.add.renderTexture(0, 0, 32, 42).setInteractive();
    // Draws the two sprites as one at location
    this.stitch.draw(
      [this.chungBody, this.chungHead],
      this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).x,
      this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).y - 16
    );

    // Makes everything look twice as big.
    this.cameras.main.zoom = 2;

    // Keyboard movement
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
    this.input.topOnly = false;

    // Outlines the player controlled gobbo when hovered over
    this.stitch.on("pointerover", () =>
      postFxPlugin.add(this.containerboi, {
        thickness: 2,
        outlineColor: 0xffffff,
      })
    );
    // Removes outline when moving mouse off
    this.input.on("pointerout", () =>
      this.plugins.get("rexOutlinePipeline").remove(this.containerboi)
    );

    this.stitch.on("pointerdown", () => this.selectGobbo(this.chung));

    this.input.on("pointerdown", () => this.movementConfirm(this.chung));

    console.log(this.currentMap);
  }

  update() {
    // Updates graphic's positions based on the goblin instance's tile index.
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
    // Updates the stitched object's position based on the goblin instance's tile index.
    this.stitch.x =
      this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).x - 16;
    this.stitch.y =
      this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).y - 36;
  }
}

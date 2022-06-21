import { PATHS } from "../pathDefs";
import { Goblin } from "../wutGobbosIz";
import { getRandomIndex } from "../utils/random";


export class combatUI extends Phaser.Scene {
  constructor() {
    super("combatUI");
  }

  gobboDef() {
    
    this.chung = new Goblin(
      {
        currentConsciousness:100,
        maxConsciousness:100,
        currentFatigue:100,
        maxFatigue:100,
        currentMorale:100,
        maxMorale:100,
  
        currentAP:3,
        maxAP:3,
  
        might:3,
        toughness:3,
        deftness:3,
        skill:3,
        cleverness:3
      },
      "arms innit",
      Goblin.goblinBodyTypes[getRandomIndex(Goblin.goblinBodyTypes)],
      Goblin.goblinHeadTypes[getRandomIndex(Goblin.goblinHeadTypes)],
      [16, 6]
    );
    this.grung = new Goblin(
      {
        currentConsciousness:100,
        maxConsciousness:100,
        currentFatigue:100,
        maxFatigue:100,
        currentMorale:100,
        maxMorale:100,
  
        currentAP:3,
        maxAP:3,
  
        might:3,
        toughness:3,
        deftness:3,
        skill:3,
        cleverness:3
      },
      "arms innit",
      Goblin.goblinBodyTypes[getRandomIndex(Goblin.goblinBodyTypes)],
      Goblin.goblinHeadTypes[getRandomIndex(Goblin.goblinHeadTypes)],
      [17, 5]
    );
    this.gobboArray = [this.chung, this.grung]
  }

  getRelativePos(tile) {
    //North, East, South, West
    let relativeArray = []
        if (tile.y + 1 < this.currentMap.height && tile.y + 1 >= 0 && this.currentMap.getTileAt(tile.x,tile.y+1).properties.occupied === false){
          relativeArray.push([tile.x, tile.y + 1])}
        if (tile.x + 1 < this.currentMap.width && tile.x + 1 >= 0 && this.currentMap.getTileAt(tile.x+1,tile.y).properties.occupied === false){
          relativeArray.push([tile.x + 1, tile.y])}
        if (tile.y - 1 >= 0 && tile.y - 1 < this.currentMap.height && this.currentMap.getTileAt(tile.x,tile.y-1).properties.occupied === false){
          relativeArray.push([tile.x, tile.y - 1])}
        if (tile.x - 1 >= 0 && tile.x - 1 < this.currentMap.width && this.currentMap.getTileAt(tile.x-1,tile.y).properties.occupied === false){
          relativeArray.push([tile.x - 1, tile.y])} 
        return relativeArray
    
}

  setAllAdjacentAP(grid,x,y,amt,reinit,originX,originY){
    if (reinit === true && amt >= 1 && grid.getTileAt(x,y).properties.APremaining < amt && grid.getTileAt(x,y,false,"floorLayer")){
      console.log('------ REINITILIZING ------- ')
      reinit = false
      grid.getTileAt(x,y).properties.APremaining = amt
      const adjTiles = this.getRelativePos(grid.getTileAt(x,y))
      console.log('Starting tile : ' + grid.getTileAt(x,y).x + ',' + grid.getTileAt(x,y).y)
      console.log('All adjacent tiles: ' +  adjTiles)
      console.log('Current ap: ' + amt)
      console.log('AP-Cost of next tile: ' + grid.getTileAt(adjTiles[0][0],adjTiles[0][1]).properties.apCost)
      console.log('Next tile being grabbed: ' + adjTiles[0])
      console.log('AP REMAINING ' + grid.getTileAt(x,y).properties.APremaining)
      adjTiles.forEach(coord => {
          const newAmt = amt - grid.getTileAt(coord[0],coord[1]).properties.apCost
          this.setAllAdjacentAP(grid,coord[0],coord[1],newAmt,reinit,originX,originY)
          if (grid.getTileAt(coord[0],coord[1]).properties.debug === false){
            grid.getTileAt(coord[0],coord[1]).properties.movementOverlay = true
          }
      })
    }
    else if ((amt >= 1 && grid.getTileAt(x,y).properties.APremaining < amt && reinit === false)) {
      console.log('------ ITERATING ------')
      grid.getTileAt(x,y).properties.APremaining = amt
      const adjTiles = this.getRelativePos(grid.getTileAt(x,y))
      console.log('Starting tile : ' + grid.getTileAt(x,y).x + ',' + grid.getTileAt(x,y).y)
      console.log('All adjacent tiles: ' +  adjTiles)
      console.log('Current ap: ' + amt)
      console.log('AP-Cost of next tile: ' + grid.getTileAt(adjTiles[0][0],adjTiles[0][1]).properties.apCost)
      console.log('Next tile being grabbed: ' + adjTiles[0])
      console.log('AP REMAINING ' + grid.getTileAt(x,y).properties.APremaining)
      adjTiles.forEach(coord => {
        if (coord[0] === originX && coord[1] === originY){
          console.log ('----- BACK AT SQUARE ONE -----')
          reinit = true
        }
        else {
          const newAmt = amt - grid.getTileAt(coord[0],coord[1]).properties.apCost
          this.setAllAdjacentAP(grid,coord[0],coord[1],newAmt,reinit,originX,originY)
          if (grid.getTileAt(coord[0],coord[1]).properties.debug === false){
              grid.getTileAt(coord[0],coord[1]).properties.movementOverlay = true
        }
        }
      })
  } else if (amt <= 0 && grid.getTileAt(x,y).properties.APremaining === 0 && reinit === false){
    console.log('------ EXCEPTING ------')
    console.log('Starting tile : ' + grid.getTileAt(x,y).x + ',' + grid.getTileAt(x,y).y)
    console.log('AP REMAINING ' + grid.getTileAt(x,y).properties.APremaining)
    amt > 1 ? console.log('collision') : console.log('none left')
    reinit = true
  }
}

  selectGobbo(target,container){
    this.setAllAdjacentAP(
      this.currentMap,
      target.xPos,
      target.yPos,
      target.stats.currentAP,
      true,
      target.xPos,
      target.yPos)

    for (let n = 0; n < this.currentMap.width; n++){
      for (let j = 0; j < this.currentMap.height; j++){
        if (this.currentMap.getTileAt(n,j).properties.movementOverlay === true){
        container.add(this.add.image(this.currentMap.tileToWorldXY(n,j).x,this.currentMap.tileToWorldXY(n,j).y,"movementIndicator"))
        }
      }
    }
  }

  clearMovementOverlay(){
    for (let n = 0; n < this.currentMap.width; n++){
      for (let j = 0; j < this.currentMap.height; j++){
        this.currentMap.getTileAt(n,j).properties.movementOverlay = false
        this.currentMap.getTileAt(n,j).properties.APremaining = 0
      }
    }
  }

  getTileBelowCursor(){
    let tile = this.currentMap.getTileAt(
      this.pointerTile.x,this.pointerTile.y,true,)
      return tile
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

  // Keyboard movement function
  moveSprite(direction, target) {
    if (direction == "left" && target.xPos - 1 >= 0) {
      target.xPos -= 1;
      this.currentMap.getTileAt(target.xPos+1,target.yPos,false,'floorLayer').properties.occupied = false
      this.currentMap.getTileAt(target.xPos+1,target.yPos,false,'floorLayer').properties.contains = 0
    } else if (direction == "right" && target.xPos +1 < this.currentMap.width) {
      target.xPos += 1;
      this.currentMap.getTileAt(target.xPos-1,target.yPos,false,'floorLayer').properties.occupied = false
      this.currentMap.getTileAt(target.xPos-1,target.yPos,false,'floorLayer').properties.contains = 0
    } else if (direction == "up" && target.yPos -1 >= 0) {
      target.yPos -= 1;
      this.currentMap.getTileAt(target.xPos,target.yPos+1,false,'floorLayer').properties.occupied = false
      this.currentMap.getTileAt(target.xPos,target.yPos+1,false,'floorLayer').properties.contains = 0
    } else if (direction == "down" && target.yPos +1 < this.currentMap.height) {
      target.yPos += 1;
      this.currentMap.getTileAt(target.xPos,target.yPos-1,false,'floorLayer').properties.occupied = false
      this.currentMap.getTileAt(target.xPos,target.yPos-1,false,'floorLayer').properties.contains = 0
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

  // Function to consolidate idle animations
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
    this.uiCam = this.cameras.add(0,0)
    
    // Defines the outline plugin for ease of use
    let postFxPlugin = this.plugins.get("rexOutlinePipeline");

    // Pulls the data for the map created in RandBattle to be used here
    this.currentMap = this.registry.get("currentMap");

    this.WF = this.sound.add("mysterySound");

    // Creates an interactive button
    this.testButtonImage = this.add
      .image((this.uiCam.width/2)-25, this.uiCam.height -50, "combatTestButtonBite")
      .setInteractive()
      .setDepth(2)
      .setScale(2);

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

    // Actually places the sprite graphics.
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
    this.sprites = [this.chungHead, this.chungBody];
    
    // Containe is useful because the outline plugin will work correctly on it. And other stuff, I dunno.
    this.containerboi = this.add.container();
    this.containerboi.add(this.sprites);
    this.containerboi.setDepth(1);

    // Combines both the body and head sprites into one object called 'stitch'
    // Doesn't need an x,y set here as it's constantly updated, second set of
    // nums is width and height of bounding box for things like selection. Is this needed?
    this.stitch = this.add.renderTexture(0, 0, 32, 42).setInteractive();
    // Draws the two sprites as one at location
    this.stitch.draw(
      [this.chungBody, this.chungHead],
      this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).x,
      this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).y - 16
    );


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
    this.stitch.on("pointerout", () =>
      this.plugins.get("rexOutlinePipeline").remove(this.containerboi)
    );
    
    // Container that the movement select overlay gets stored into so that we can use and destroy it when needed
    this.movementOverlayImageContainer = this.add.container()
    // Console logs the tile object below the cursor when clicking.
    this.input.on("pointerdown", () => console.log(this.getTileBelowCursor()))
    // Selects the goblin you're hovering over and displays UI elements related.
    this.input.on("pointerdown", () => this.selectGobbo(this.getTileBelowCursor().properties.contains,this.movementOverlayImageContainer));

    //this.input.on("pointerdown", () => this.movementConfirm(this.chung));
    
    this.input.keyboard.on("keydown-LEFT", () =>
      this.movementOverlayImageContainer.removeAll(true)
    );
    this.input.keyboard.on("keydown-LEFT", () =>
      this.clearMovementOverlay()
    );



    // Scroll all cameras 'map camera' from randbattle, and sprite camera from combatUI. Making all
    // UI elements relative to the UI camera and scrolling the others keeps the UI from moving.
    this.input.keyboard.on("keydown-A", () => this.cameras.main.scrollX -= 3)
                       .on("keydown-W", () => this.cameras.main.scrollY -= 3)
                       .on("keydown-D", () => this.cameras.main.scrollX += 3)
                       .on("keydown-S", () => this.cameras.main.scrollY += 3)
                       .on("keydown-A", () => this.scene.get('RandBattle').cameras.main.scrollX -=3)
                       .on("keydown-W", () => this.scene.get('RandBattle').cameras.main.scrollY -=3)
                       .on("keydown-D", () => this.scene.get('RandBattle').cameras.main.scrollX +=3)
                       .on("keydown-S", () => this.scene.get('RandBattle').cameras.main.scrollY +=3)



    // Complete list of sprites for the UI camera not to replicate. 
    this.fullSpriteList = [this.chungBody, this.chungHead, this.grungBody, this.grungHead]
    // Made a new camera object in order to pan around the screen.
    this.uiCam.ignore(this.fullSpriteList)
              .ignore(this.movementOverlayImageContainer)
    // Main camera ignores UI elements so they aren't replicated in it.
    this.cameras.main.ignore(this.testButtonImage)
   
    // Instantiating mouse wheel zoom and bounding camera scroll plugins
    this.cursorAtBounds = this.plugins.get('rexCursorAtBound').add(this, {sensitiveDistance: 20})
    this.mouseWheelToUpDown = this.plugins.get('rexMouseWheelToUpDown').add(this);

    this.cursorKeys = this.cursorAtBounds.createCursorKeys();
    this.zoomKeys = this.mouseWheelToUpDown.createCursorKeys();
    // Setting up which cameras get zoomed and scrolled. Currently there are three cameras, RandBattle.cameras.main
    // from the prior scene which controls the map, this.cameras.main controls sprites, while uiCam is exclusively
    // for ui elements in order to keep them static to the player's view.
    this.cameraController1 = new Phaser.Cameras.Controls.SmoothedKeyControl({
      camera: this.scene.get('RandBattle').cameras.main,

      left: this.cursorKeys.left,
      right: this.cursorKeys.right,
      up: this.cursorKeys.up,
      down: this.cursorKeys.down,
      zoomIn: this.zoomKeys.down,
      zoomOut: this.zoomKeys.up,

      acceleration: 0.06,
      drag: 0.003,
      maxSpeed: 0.3,
      zoomSpeed: 0.08
    })
    this.cameraController2 = new Phaser.Cameras.Controls.SmoothedKeyControl({
      camera: this.cameras.main,

      left: this.cursorKeys.left,
      right: this.cursorKeys.right,
      up: this.cursorKeys.up,
      down: this.cursorKeys.down,
      zoomIn: this.zoomKeys.down,
      zoomOut: this.zoomKeys.up,

      acceleration: 0.06,
      drag: 0.003,
      maxSpeed: 0.3,
      zoomSpeed: 0.08
    })
    
    
  }

  updateGobboPositions(){
    // Iterates over the goblins in gobboArray and sets the tile they're at to occupied
    // and also contains to equal the goblin itself for seeking out.
    for (let gob = 0; gob < this.gobboArray.length; gob++){
      this.currentMap.getTileAt(this.gobboArray[gob].xPos,this.gobboArray[gob].yPos,false,'floorLayer')
      .properties.occupied = true
      this.currentMap.getTileAt(this.gobboArray[gob].xPos,this.gobboArray[gob].yPos,false,'floorLayer')
      .properties.contains = this.gobboArray[gob]
      }
    
  }

  update(time,delta) {
    // Updates graphic's positions based on the goblin instance's tile index.
    this.chungBody.x = this.currentMap.tileToWorldXY(this.chung.xPos,this.chung.yPos).x;
    this.chungBody.y = this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).y - 18;
    this.chungHead.x = this.currentMap.tileToWorldXY(this.chung.xPos,this.chung.yPos).x;
    this.chungHead.y = this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).y - 18;
    // Updates the stitched object's position based on the goblin instance's tile index.
    this.stitch.x =this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).x - 18;
    this.stitch.y =this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).y - 38;

    // Updates gobbo xPos and yPos when moving.
    this.updateGobboPositions()

    // Updates the mouse cursor position and what tile it is at.
    this.worldPointer = this.input.activePointer.positionToCamera(this.cameras.main);
    this.pointerTile = this.currentMap.worldToTileXY(this.worldPointer.x,this.worldPointer.y + 16,true);
      
    // Keeps the cameras updated positions through zoom and panning
    this.cameraController1.update(delta)
    this.cameraController2.update(delta)
  
  
  }
}

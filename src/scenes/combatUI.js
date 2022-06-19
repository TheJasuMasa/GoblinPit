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


  // selectGobbo(target,i,j){
  //   this.movementGrid = this.add.renderTexture(0, 0, 32, 64).setInteractive();
    
  //   let selected = target
  //   let fillStack = []

  //   fillStack.push([i,j])

  //   while(fillStack.length > 0)
  //   {
  //     var [i,j] = fillStack.pop()

  //     if (i < 0 || i >= this.currentMap.width || j < 0 || j >= this.currentMap.height) continue;
  //     if (this.currentMap.getTileAt(i,j,true,"floorLayer").properties.movementOverlay !== false) continue;
      
  //     this.currentMap.getTileAt(i,j,true,"floorLayer").properties.movementOverlay = true
      
  //     if (this.currentMap.getTileAt(i,j,true,"floorLayer").properties.movementOverlay == true){
  //         this.add.image(this.currentMap.tileToWorldXY(i,j).x,this.currentMap.tileToWorldXY(i,j).y,"movementIndicator")}

  //     if (i >= (selected.xPos+selected.stats.currentAP)){continue}
  //     else {fillStack.push([i+1,j])}
  //     if (i <= (selected.xPos-selected.stats.currentAP)){continue}
  //     else {fillStack.push([i-1,j])}
  //     if (j >= (selected.yPos+selected.stats.currentAP)){continue}
  //     else {fillStack.push([i,j+1])}
  //     if (j <= (selected.yPos-selected.stats.currentAP)){continue}
  //     else {fillStack.push([i,j-1])}

      
  //   }
    
  // }

  getAdjacentTiles(tile,array){
    
      array.push(
                this.currentMap.getTileAt(tile.x-1,tile.y,true,"floorLayer"),
                this.currentMap.getTileAt(tile.x+1,tile.y,true,"floorLayer"),
                this.currentMap.getTileAt(tile.x,tile.y-1,true,"floorLayer"),
                this.currentMap.getTileAt(tile.x,tile.y+1,true,"floorLayer"),
                )    
}

  selectGobbo(target,xPos,yPos){
    let adjTileArray = []
    let ap = target.stats.currentAP
   
    for (let n = 0; n < 4 ; n++){
      let tileLeft = this.currentMap.getTileAt(xPos-n,yPos,true,"floorLayer")
      let tileRight = this.currentMap.getTileAt(xPos+n,yPos,true,"floorLayer")
      let tileUp = this.currentMap.getTileAt(xPos,yPos-n,true,"floorLayer")
      let tileDown = this.currentMap.getTileAt(xPos,yPos+n,true,"floorLayer")
    
      this.getAdjacentTiles(tileLeft,adjTileArray)
      this.getAdjacentTiles(tileRight,adjTileArray)
      this.getAdjacentTiles(tileUp,adjTileArray)
      this.getAdjacentTiles(tileDown,adjTileArray)
    }
    
    for (let m = 0; m < adjTileArray.length; m++){
      adjTileArray[m].properties.movementOverlay = true
      this.add.image(this.currentMap.tileToWorldXY(adjTileArray[m].x,adjTileArray[m].y).x,this.currentMap.tileToWorldXY(adjTileArray[m].x,adjTileArray[m].y).y,"movementIndicator")
    }
    console.log(adjTileArray)
  }

  // getAdjacentTiles(tile,target){
  //   //console.log(tile)
  //   //console.log('tile at' + toString(tile.x) + ', ' + toString(tile.y))
  //   let ap = target.stats.currentAP
  //   if (tile.x > 0 && tile.x < this.currentMap.width && tile.y > 0 && tile.y < this.currentMap.height){
  //     if ( 
  //     this.currentMap.getTileAt(tile.x-1,tile.y,true,"floorLayer").properties.movementOverlay != true){
  //      let tileLeft = this.currentMap.getTileAt(tile.x-1,tile.y,true,'floorLayer')
  //      console.log(tileLeft)
  //     }
  //     if ( 
  //     this.currentMap.getTileAt(tile.x,tile.y-1,true,"floorLayer").properties.movementOverlay != true){
  //       let tileUp = this.currentMap.getTileAt(tile.x,tile.y-1,true,'floorLayer')
  //       console.log(tileUp)
  //     }
  //     if ( 
  //     this.currentMap.getTileAt(tile.x+1,tile.y,true,"floorLayer").properties.movementOverlay != true){
  //       let tileRight = this.currentMap.getTileAt(tile.x+1,tile.y,true,'floorLayer')
  //       console.log(tileRight)
  //     }
  //     if ( 
  //     this.currentMap.getTileAt(tile.x,tile.y+1,true,"floorLayer").properties.movementOverlay != true){
  //       let tileDown = this.currentMap.getTileAt(tile.x,tile.y+1,true,'floorLayer')
  //       console.log(tileDown)
  //       }
  //     }
      
      
      
      

  //     }
    
  

  // // Insanely poorly designed method of displaying where a goblin can move
  // // based 1:1 on their 'ap'
  // selectGobbo(target) {
    
  //   let startTile = this.currentMap.getTileAt(target.xPos,target.yPos,true,'floorLayer')
  //   let arrayArray = [this.getAdjacentTiles(startTile,target)]

  //   this.movementGrid = this.add.renderTexture(0, 0, 32, 64).setInteractive();

  //   for (let i = 0; i < target.stats.currentAP*8; i++){
  //     for (let k = 0; k < 4; k++){
  //       if (arrayArray[i][k].x > 0 && arrayArray[i][k].x < 19 && arrayArray[i][k].y > 0 && arrayArray[i][k].y < 14){
  //         arrayArray.push(this.getAdjacentTiles(arrayArray[i][k],target))
  //         arrayArray[i][k].properties.movementOverlay = true  
  //       if (arrayArray[i][k].properties.movementOverlay == true){
  //         this.add.image(this.currentMap.tileToWorldXY(arrayArray[i][k].x,arrayArray[i][k].y).x,this.currentMap.tileToWorldXY(arrayArray[i][k].x,arrayArray[i][k].y).y,"movementIndicator")
  //       }
  //     }}
  //   }

  //   console.log(arrayArray)
  //   }
  
    

  // selectGobbo(target) {
  //   let ap = target.stats.currentAP
  //   let startTile = this.currentMap.getTileAt(target.xPos,target.yPos,true,'floorLayer')
  //   let arrayArray = [this.getAdjacentTiles(startTile)]

  //   this.movementGrid = this.add.renderTexture(0, 0, 32, 64).setInteractive();

  //   for (let i = 0; i < (ap*7); i++){
  //     for (let n = 0; n < 4; n++){
  //         arrayArray.push(this.getAdjacentTiles(arrayArray[i][n]))
          
  //     }
  //   }
  //   console.log(arrayArray)
  //   for (let n = 0; n < arrayArray.length; n++){
  //     for (let m = 0; m < 4; m++){
  //       arrayArray[n][m].properties.movementOverlay = true
  //       // console.log(arrayArray[n][m])
  //     }
  //   }
  // }
    

    // this.movementGrid.draw(this.add.image(
    //   this.currentMap.tileToWorldXY(arrayArray[i][n].x,arrayArray[i][n].y).x,
    //   this.currentMap.tileToWorldXY(arrayArray[i][n].x,arrayArray[i][n].y).y,
    //   "movementIndicator"
    // ))



    // for (let k = 0; k < arrayArray.length; k++){
    //   for (let j = 0; j < 4; j++){
    //     this.movementGrid.draw(this.add.image(
    //       this.currentMap.tileToWorldXY(arrayArray[k][j].x,arrayArray[k][j].y).x,
    //       this.currentMap.tileToWorldXY(arrayArray[k][j].x,arrayArray[k][j].y).y,
    //       "movementIndicator"
    //     ))
    //   }
    // }




    // for (let apleft = ap; apleft > 0; apleft--){
    //   for (let i = 0; i < 4; i++){
    //     let newArray = this.getAdjacentTiles(startArray[i])
        
    //     this.movementGrid.draw(this.add.image(
    //       this.currentMap.tileToWorldXY(startArray[i].x,startArray[i].y).x,
    //       this.currentMap.tileToWorldXY(startArray[i].x,startArray[i].y).y,
    //       "movementIndicator"))

          
          
    //   }
    // }
    


      // for (let i = 0; i < this.currentMap.width; i++){
      //   for (let j = 0; j < this.currentMap.height; j++){
      //     let tile = this.currentMap.getTileAt(i,j,true,'floorLayer')
      //     let wall = this.currentMap.getTileAt(i,j,true,'wallLayer')
          

                      
      //       if (tile.x <= (target.xPos + ap) &&
      //           tile.x >= (target.xPos - ap) &&
      //           tile.y <= (target.yPos + ap) &&
      //           tile.y >= (target.yPos - ap) &&
      //           tile.properties.occupied != true &&
      //           tile.properties.debug != true &&
      //           wall.properties.occupied != true

      //           ){
      //             console.log(this.getAdjacentTiles(startTile))
      //             //console.log(this.currentMap.getTileAt(i,j,false,'floorLayer'))
      //             this.movementGrid.draw(this.add.image(this.currentMap.tileToWorldXY(i,j).x,this.currentMap.tileToWorldXY(i,j).y,"movementIndicator"))
      //       }
      //   }
      // }  
    // target.selected = true;
    // }

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
    if (direction == "left") {
      target.xPos -= 1;
      this.currentMap.getTileAt(target.xPos+1,target.yPos,false,'floorLayer').properties.occupied = false
      this.currentMap.getTileAt(target.xPos+1,target.yPos,false,'floorLayer').properties.contains = 0
    } else if (direction == "right") {
      target.xPos += 1;
      this.currentMap.getTileAt(target.xPos-1,target.yPos,false,'floorLayer').properties.occupied = false
      this.currentMap.getTileAt(target.xPos-1,target.yPos,false,'floorLayer').properties.contains = 0
    } else if (direction == "up") {
      target.yPos -= 1;
      this.currentMap.getTileAt(target.xPos,target.yPos+1,false,'floorLayer').properties.occupied = false
      this.currentMap.getTileAt(target.xPos,target.yPos+1,false,'floorLayer').properties.contains = 0
    } else if (direction == "down") {
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


    this.input.on("pointerdown", () => console.log(this.getTileBelowCursor()))
    this.input.on("pointerdown", () => this.selectGobbo(this.getTileBelowCursor().properties.contains,
    this.getTileBelowCursor().properties.contains.xPos,
    this.getTileBelowCursor().properties.contains.yPos));

    //this.input.on("pointerdown", () => this.movementConfirm(this.chung));

   

    console.log(this.currentMap);
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
    // Iterates over every tile in the floorLayer to see see if they're occupied
    // if they are, then we get told which gobbo is where!
    // for (let x = 0; x < this.currentMap.width; x++){
    //   for (let y = 0; y < this.currentMap.height; y++){
    //     if (this.currentMap.getTileAt(x,y,false,'floorLayer').properties.occupied==true){
    //       console.log(this.currentMap.getTileAt(x,y,false,'floorLayer').properties.contains.name + ' iz at ' + x + ',' + y)}
    //   }
    // }
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

      this.updateGobboPositions()

      this.worldPointer = this.input.activePointer.positionToCamera(
        this.cameras.main
      );
      this.pointerTile = this.currentMap.worldToTileXY(
        this.worldPointer.x,
        this.worldPointer.y + 16,
        true
      );
      
        
      
  
  
  }
}

import { PATHS } from "../pathDefs";
import testMap from "../maps/testMap.json";
import { Entity } from "../generators/Entity";

export class RandBattle extends Phaser.Scene {
  constructor() {
    super("RandBattle");
  }

  getTileBelowCursor(){
    if (this.pointerTile.x >= 0 && this.pointerTile.x < this.currentMap.width &&
        this.pointerTile.y >= 0 && this.pointerTile.y < this.currentMap.height){
          let tile = this.currentMap.getTileAt(
            this.pointerTile.x,this.pointerTile.y,false)
            return tile
  }}

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
          if (grid.getTileAt(coord[0],coord[1]).properties.occupied === false){
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
          if (grid.getTileAt(coord[0],coord[1]).properties.occupied === false){
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

  selectEntity(target,container,layerList){
    this.setAllAdjacentAP(
      this.currentMap,
      target.xPos,
      target.yPos,
      target.stats.currentAP,
      true,
      target.xPos,
      target.yPos)

      target.selected = true

      // this.shadowBody = this.add
      // .sprite(0, 0, "gobBody1")
      // .setScale(1.25)
      // .setDepth(1)
      // .setAlpha(.5);
      // this.shadowHead = this.add
      // .sprite(0, 0, "gobHead1")
      // .setScale(1.25)
      // .setDepth(1)
      // .setAlpha(.5);

      // this.uiCam.ignore(this.shadowBody)
      //           .ignore(this.shadowHead)

      for (let n = 0; n < this.currentMap.width; n++){
        for (let j = 0; j < this.currentMap.height; j++){
          if (this.currentMap.getTileAt(n,j).properties.movementOverlay === true){
            for (let p = 0; p < layerList.length; p++){
              if (this.currentMap.getTileAt(n,j,false,layerList[p]) != null && layerList[p] != "floorLayer"){
                container.add(
                  this.add.image(
                  this.currentMap.tileToWorldXY(n,j).x,
                  this.currentMap.tileToWorldXY(n,j).y-this.currentMap.getTileAt(n,j,false,layerList[p]).properties.spriteOffset,"movementIndicator"))
                }
              else if (layerList[p] === "floorLayer" &&
                      this.currentMap.getTileAt(n,j,false,'floorLayer').properties.debug === false){
                container.add(this.add.image(this.currentMap.tileToWorldXY(n,j).x,this.currentMap.tileToWorldXY(n,j).y,"movementIndicator"))
              }}}}}
                }

  clearMovementOverlay(){
    for (let n = 0; n < this.currentMap.width; n++){
      for (let j = 0; j < this.currentMap.height; j++){
        this.currentMap.getTileAt(n,j).properties.movementOverlay = false
        this.currentMap.getTileAt(n,j).properties.APremaining = 0
      }
    }
  }

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

  movementConfirm(target) {
    if (target.selected === true && this.getTileBelowCursor().properties.movementOverlay === true) {
      this.currentMap.getTileAt(target.xPos,target.yPos,false,'floorLayer').properties.occupied = false
      this.currentMap.getTileAt(target.xPos,target.yPos,false,'floorLayer').properties.contains = 0
      target.xPos = this.getTileBelowCursor().x
      target.yPos = this.getTileBelowCursor().y
      this.clearMovementOverlay()
      this.movementOverlayImageContainer.removeAll(true)
      target.selected = false
      
      // this.shadowBody.destroy()
      // this.shadowHead.destroy()
      
    }
  }

  preload() {
    // --- MAP PRELOADS --- //
    // Preloads the tileset pngs
    this.load.image("PreTiles", `${PATHS.tiles}/tileBoi.png`);
    this.load.image("PreHills", `${PATHS.tiles}/hillBoi.png`);
    this.load.image("PreWalls", `${PATHS.tiles}/wallBoi.png`);
    this.load.image("tileMarker", `${PATHS.UI}/tileMarkerNew2.png`);
    // Preloads the map.json created in Tiled
    this.load.tilemapTiledJSON("testMap", testMap);

    //Preloads secret fun stuff
    this.load.audio("GT", `${PATHS.music}/GT.mp3`);

    // --- IMAGE PRELOADS --- //
    this.load.image("tileMarker", `${PATHS.UI}/tileMarkerNew2.png`);

    // --- SPRITE & ENTITY PRELOADS --- //
    this.entityList = []
    for (let i = 0; i < 1; i++){
      this.entityList.push(new Entity('goblin',16,6))
      for (let j = 0; j < this.entityList[i].sprite.keyTypes.length; j++)
        this.entityList[i].sprite.setSpritesheet(this,this.entityList[i].sprite.spriteKeys[j],this.entityList[i].sprite[this.entityList[i].sprite.keyTypes[j]],33,33)
    }
  }

  create() {
    // --- PLUGIN DEFINITIONS --- //
    this.postFxPlugin = this.plugins.get("rexOutlinePipeline");
    // --- CUROR/TILE MARKER --- //
    this.tileMarker = this.add.image(0, 0, "tileMarker");
    this.tileMarker.setDepth(1)
    // --- BAM BUH BAM BA BAAH --- //
    this.GT = this.sound.add("GT");
    this.GT.play();
    //// ----- TILES/TERRAIN ------ ////
    // Constructs the map
    this.currentMap = this.make.tilemap({
      key: "testMap",
      tileWidth: 64,
      tileHeight: 32,
    });
    // Defines the tileset images and aligns their keys for the map
    this.tileset = this.currentMap.addTilesetImage("tiles", "PreTiles");
    this.tileset4 = this.currentMap.addTilesetImage('hills', "PreTiles")
    this.tileset2 = this.currentMap.addTilesetImage("walls", "PreWalls");
    this.tileset3 = this.currentMap.addTilesetImage('hills', "PreHills")
    // Defines the layers and aligns their keys with tilesets
    this.layer1 = this.currentMap.createLayer("floorLayer", [this.tileset], 0, 0);
    this.layer4 = this.currentMap.createLayer("hillLayerBehind", [this.tileset4], 0, 0)
    this.layer2 = this.currentMap.createLayer("wallLayer", [this.tileset2], 0, 0);
    this.layer3 = this.currentMap.createLayer("hillLayer", [this.tileset3], 0, 0);
    this.layers = ['floorLayer','hillLayerBehind','wallLayer','hillLayer']
    // Sets the active layer for default commands, convenience
    this.currentMap.setLayer(this.layer1)
    // Activates the combatUI scene on top of this one
    this.scene.launch("combatUI",this.config);
    // Saves the currentMap for getting in combatUI for use in its features
    this.registry.set('currentMap',this.currentMap)

    // --- SPRITE & ANIMATION CREATION --- //
    for (let i = 0; i < this.entityList.length; i++){
      this.entityList[i].sprite.animation.createAnim(this,'bodyAnimKeys','idle',this.entityList[i].sprite.bodyKey)
      this.entityList[i].sprite.createSprite(this,this.entityList[i].sprite.bodyKey,this.entityList[i].sprite.animation.bodyAnimKeys[0])
      this.entityList[i].sprite.animation.createAnim(this,'headAnimKeys','idle',this.entityList[i].sprite.headKey)
      this.entityList[i].sprite.createSprite(this,this.entityList[i].sprite.headKey,this.entityList[i].sprite.animation.headAnimKeys[0])

      this.entityList[i].sprite.createRenderTexture(this,this.entityList[i].sprite.spriteList,this.entityList[i])
     }

     // --- INPUT DEFINITIONS --- //
     this.input.topOnly = false;
     // Creates a container to be manipulated for pathing display
     this.movementOverlayImageContainer = this.add.container()
     this.input.on("pointerdown", () => console.log(this.getTileBelowCursor()))
     // Selects the entity below the cursor
     this.input.on('pointerdown', () => this.selectEntity(this.getTileBelowCursor().properties.contains,
                                                          this.movementOverlayImageContainer,this.layers))
     this.input.on('pointerup', () => this.movementConfirm(this.entityList[0]))
     // Handles outline for hovering over any entity in the list.
     for (let i = 0; i < this.entityList.length; i++){
      this.entityList[i].sprite.stitch.on("pointerover", () =>
        this.postFxPlugin.add(this.entityList[i].sprite.container, {
          thickness: 2,
          outlineColor: 0xffffff,
        })
      );
      // Removes outline when moving mouse off
      this.entityList[i].sprite.stitch.on("pointerout", () =>
        this.plugins.get("rexOutlinePipeline").remove(this.entityList[i].sprite.container)
      );
      this.input.enableDebug(this.entityList[i].sprite.stitch)
      if (this.entityList[i].selected === true){
        
      }
      }
       // Keyboard movement
    
      this.input.keyboard.on("keydown-LEFT", () =>
        this.moveSprite("left", this.entityList[0])
      );
      this.input.keyboard.on("keydown-RIGHT", () =>
        this.moveSprite("right", this.entityList[0])
      );
      this.input.keyboard.on("keydown-UP", () =>
        this.moveSprite("up", this.entityList[0])
      );
      this.input.keyboard.on("keydown-DOWN", () =>
        this.moveSprite("down", this.entityList[0])
      );
    }
  
updateEntityPosition(entityList){
  // Iterates over the entities and sets the tile they're at to occupied
  // and also contains to equal the entity itself for seeking out.
  for (let i = 0; i < entityList.length; i++){
    this.currentMap.getTileAt(entityList[i].xPos,entityList[i].yPos,false,'floorLayer')
    .properties.occupied = true
    this.currentMap.getTileAt(entityList[i].xPos,entityList[i].yPos,false,'floorLayer')
    .properties.contains = entityList[i]
    }
  }

updateEntitySpritePosition(layerList, entity){
  for (let i = 0; i < entity.length; i++){
    for (let j = 0; j < layerList.length; j++){
      let tile = this.currentMap.getTileAt(entity[i].xPos,entity[i].yPos,false,layerList[j])
      if (tile != null){
        for (let k = 0; k < entity[i].sprite.spriteList.length; k++){
          entity[i].sprite.spriteList[k].x = this.currentMap.tileToWorldXY(tile.x,tile.y).x
          entity[i].sprite.spriteList[k].y = (this.currentMap.tileToWorldXY(tile.x,tile.y).y - tile.properties.spriteOffset - 18)
          if (entity[i].yPos < this.currentMap.getTileAt(entity[i].xPos, entity[i].yPos,false).properties.contains.yPos){
            entity[i].sprite.spriteList[k].setDepth(4)
          }
          if (entity[i].yPos > this.currentMap.getTileAt(entity[i].xPos, entity[i].yPos,false).properties.contains.yPos){
            entity[i].sprite.spriteList[k].setDepth(6)
          }
          else {
            entity[i].sprite.spriteList[k].setDepth(5)
          }      
        }
      }
    }
    entity[i].sprite.stitch.x = this.currentMap.tileToWorldXY(entity[i].xPos,entity[i].yPos).x-18
    entity[i].sprite.stitch.y = this.currentMap.tileToWorldXY(entity[i].xPos,entity[i].yPos).y-38
  }
}

updateCursorPosition(layerList){
  // Returns coordinates of cursor relative to camera
  this.worldPointer = this.input.activePointer.positionToCamera(this.cameras.main);
  // Takes worldPointer coordinates and translates them to tile index
  this.pointerTile = this.currentMap.worldToTileXY(
    this.worldPointer.x,
    this.worldPointer.y + 16,
    true
  );
  // Takes tile index and translates it to global coordinates
  var tileCoords = this.currentMap.tileToWorldXY(
    this.pointerTile.x,
    this.pointerTile.y
  );

  for (let i = 0; i < layerList.length; i++){
    let tile = this.currentMap.getTileAt(this.pointerTile.x,this.pointerTile.y,false,layerList[i])
    if (tile != null){
      this.tileMarker.x = tileCoords.x;
      this.tileMarker.y = (tileCoords.y - tile.properties.spriteOffset)
    }
    else {}
  }
  if (this.currentMap.getTileAt(this.pointerTile.x,this.pointerTile.y,false,"wallLayer") == null &&
      this.currentMap.getTileAt(this.pointerTile.x,this.pointerTile.y+1,false,"wallLayer") != null ||
      this.currentMap.getTileAt(this.pointerTile.x,this.pointerTile.y,false,"wallLayer") == null &&
      this.currentMap.getTileAt(this.pointerTile.x+1,this.pointerTile.y,false,"wallLayer") != null ||
      this.currentMap.getTileAt(this.pointerTile.x,this.pointerTile.y,false,"wallLayer") == null &&
      this.currentMap.getTileAt(this.pointerTile.x+1,this.pointerTile.y+1,false,"wallLayer") != null){
        this.layer2.alpha = 0.5
  }
  else {
    this.layer2.alpha = 1
  }
}

  update() {
    this.updateEntityPosition(this.entityList)
    this.updateEntitySpritePosition(this.layers, this.entityList)
    this.updateCursorPosition(this.layers)
  }
}

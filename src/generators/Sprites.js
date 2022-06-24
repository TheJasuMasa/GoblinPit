import {getRandomIndex} from '../utils/random'
import { Animations } from './Animations'
import * as pathNames from './spriteDefs'

export class Sprites{
    constructor(entity){
        this.headPath = null
        this.bodyPath = null
        
        this.headKey =  "headSp-" + entity.id
        this.bodyKey =  "bodySp-" + entity.id
        
        this.spriteList = null
        this.animList = null

        this.animation = new Animations(entity)
        
        this.initializePaths()
    }

    setRandomPath(obj, type){
        this[obj] = pathNames.goblin[type][getRandomIndex(pathNames.goblin[type])]
    }   

    initializePaths(){
        this.setRandomPath("headPath", "headTypes")
        this.setRandomPath("bodyPath", "bodyTypes")
    }

    setSpritesheet(sceneObj,key,path,frameWidth,frameHeight){
        sceneObj.load.spritesheet(key, path, {
            frameWidth: frameWidth,
            frameHeight: frameHeight,
            endFrame: 4,
            margin: 1,
            spacing: 1,
          });
    }

    createSprite(sceneObj,spritesheetKey,animationKey){
        sceneObj.add
            .sprite(0,0,spritesheetKey)
            .play(animationKey)
            .setInteractive()
            .setScale(1.25)
            .setDepth(10)
    }
}
    

 

//   this.chung.spritesList = [this.chungBody, this.chungHead]
//   this.grung.spritesList = [this.grungBody, this.grungHead]

//   // Putting Gobbo sprites in an array to put into a container.
//   this.sprites = [this.chungHead, this.chungBody];
  
//   // Containe is useful because the outline plugin will work correctly on it. And other stuff, I dunno.
//   this.containerboi = this.add.container();
//   this.containerboi.add(this.sprites);
//   this.containerboi.setDepth(1);

//   // Combines both the body and head sprites into one object called 'stitch'
//   // Doesn't need an x,y set here as it's constantly updated, second set of
//   // nums is width and height of bounding box for things like selection. Is this needed?
//   this.stitch = this.add.renderTexture(0, 0, 32, 42).setInteractive();
//   // Draws the two sprites as one at location
//   this.stitch.draw(
//     [this.chungBody, this.chungHead],
//     this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).x,
//     this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).y - 16
//   );
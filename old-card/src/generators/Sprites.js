import {getRandomIndex} from '../utils/random'
import { Animations } from './Animations'
import * as pathNames from './spriteDefs'

export class Sprites{
    constructor(entity){
        
        //Have animation inherit this value
        this.keyTypes = Object.keys(pathNames[entity.race].types)
        
        this.spriteKeys = []
        this.spriteList = []

        // For outlining sprite contiguously
        this.container = null
        this.stitch = null

        this.animation = new Animations(entity)
        
        this.initializeRandomPaths(entity)
    }

    //God have mercy on whoever must read this x3
    initializeRandomPaths(entity){
        this.keyTypes.forEach((keyType, i) => {
            this[keyType.slice(0, keyType.length)] = pathNames[entity.race].types[keyType][getRandomIndex(pathNames[entity.race].types[keyType])]
            this[pathNames[entity.race].typeNames[i] + "Key"] = pathNames[entity.race].typeNames[i] + "sp-" + entity.id
            this.spriteKeys.push(pathNames[entity.race].typeNames[i] + "sp-" + entity.id)
        })
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
        let sprite = sceneObj.add
            .sprite(0,0,spritesheetKey)
            .play(animationKey)
            .setInteractive()
            .setScale(1.25)
            
        this.spriteList.push(sprite)
    }


    createRenderTexture(sceneObj, spriteList, entity){
        this.container = sceneObj.add.container();
        this.container.add(spriteList)
                      .setDepth(10)
        this.stitch = sceneObj.add.renderTexture(0,0,32,42)
        this.stitch.setInteractive()
                   .draw(spriteList[0],spriteList[1],
                        sceneObj.currentMap.tileToWorldXY(entity.xPos, entity.yPos).x,
                        sceneObj.currentMap.tileToWorldXY(entity.xPos, entity.yPos).y)
                    .setDepth(10)
                    
        // this.container = container
        // this.stitch = stitch
    }
    
}
 

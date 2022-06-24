import { RandBattle } from '../scenes/RandBattle'
import * as pathNames from './spriteDefs'

export class Animations {
    constructor(entity){

        this.headAnimKeys = this.generateAnimKey("headAnimKeys", pathNames[entity.race].animFrames, entity)
        this.bodyAnimKeys = this.generateAnimKey("bodyAnimKeys", pathNames[entity.race].animFrames, entity)
        
        this.animFrames = pathNames[entity.race].animFrames
    }

//initializeAnimKeys(){}

generateAnimKey(typeName, animObject, entity){
    let keyArray = []
    let objKeys = Object.keys(animObject)
    objKeys.forEach((animType) => {
        keyArray.push(typeName + "-" + animType + "-" + entity.id)
    })
    return keyArray
}

createAnim(sceneObj, keyType, animKeyValue, spritesheetKey){
        console.log(this[keyType])
        let filtered = this[keyType].filter(animKey => {
            console.log(animKey)
            console.log(animKey.includes(keyType + "-" + animKeyValue))
            if (animKey.includes(keyType + "-" + animKeyValue)){  
        return animKey
            }
        })
        let anim = {
            key: filtered[0],
            frames: sceneObj.anims.generateFrameNumbers(spritesheetKey, {
                start: 0,
                end: 1,
            }),
            frameRate: 3,
            repeat: -1,
        }
        console.log(anim)
        sceneObj.anims.create(anim)
    }
}

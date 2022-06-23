import { RandBattle } from '../scenes/RandBattle'
import * as pathNames from '/spriteDefs'

export class Animations {
    constructor(entity){

        this.headAnimKeys = generateAnimKey("headAnim", pathNames[entity.race].animFrames, entity)
        this.bodyAnimKeys = generateAnimKey("bodyAnim", pathNames[entity.race].animFrames, entity)
        
        this.animFrames = pathNames[entity.race].animFrames
    }

generateAnimKey(typeName, animObject, entity){
    let keyArray = []
    Object.keys(animObject)
    animObject.forEach((animType) => {
        keyArray.push(typeName + "-" + animType + "-" + entity.id)
    })
    return keyArray
}
    
// filtered = headAnimKeys.filter(animKey => {
//     animKey.includes(keyType + "-" + animKeyValue)
// })

// filtered[0]


createAnim(sceneObj, keyType, animKeyValue){
        let filtered = this[keyType].filter(animKey => {
        return this[animKey].includes(keyType + "-" + animKeyValue)
        })
        let anim = {
            key: filtered[0],
            frames: sceneObj.anims.generateFrameNumbers(pathKey, {
                start: this.animFrames[animType][0],
                end: this.animFrames[animType][1],
            }),
            frameRate: 3,
            repeat: -1,
        }
        sceneObj.anims.create(anim)
    }
}


    // setAnimType(animType){
    //     this.animType = pathNames[entity.race].animFrames[animType]
    // }

// ANIMATION FUNCTION //
// animIdle(newKey, spritesheetKey, back) {
//     if (back === false){
//       let idle = {
//         key: newKey,
//         frames: this.anims.generateFrameNumbers(spritesheetKey, {
//           start: 0,
//           end: 1,
//         }),
//         frameRate: 3,
//         repeat: -1,
//       };
//       this.anims.create(idle);
//     }
//     if (back === true){
//       let idle = {
//         key: newKey,
//         frames: this.anims.generateFrameNumbers(spritesheetKey, {
//           start: 2,
//           end: 3,
//         }),
//         frameRate: 3,
//         repeat: -1,
//       };
//       this.anims.create(idle);
//     }
//   }
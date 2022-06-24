import {PATHS} from '../pathDefs'

// List of sprite heads and body variations to staple together.
// List of sprite heads and body variations to staple together.
export const goblin = {
  headTypes: [
    `${PATHS.sprites}/gobboHead1SS.png`,
    // `${PATHS.sprites}/gobboHead2SS.png`,
    // `${PATHS.sprites}/gobboHead3SS.png`,
    // `${PATHS.sprites}/gobboHead4SS.png`,
  ],
  bodyTypes:[
    `${PATHS.sprites}/gobboBody1SS.png`,
    // `${PATHS.sprites}/gobboBody2SS.png`,
  ],
  frameWidth: 33,
  frameHeight: 33,

  animFrames: {
    idle: [0, 1],
    backIdle: [2, 3],
    attack: [3, 4]
  },
}
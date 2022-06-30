import {PATHS} from '../../../src/pathDefs'

// List of sprite heads and body variations to staple together.
export const goblin = {
  headTypes: [
    `${PATHS.sprites}/gobboBody1SS.png`,
    `${PATHS.sprites}/gobboBody2SS.png`,
  ],
  bodyTypes:[
    `${PATHS.sprites}/gobboBody1SS.png`,
    `${PATHS.sprites}/gobboBody2SS.png`,
  ],
  frameWidth: 33,
  frameHeight: 33,

  animFrames: {
    idle: [0, 1],
    backIdle: [2, 3],
    attack: [0, 0]
  }
}
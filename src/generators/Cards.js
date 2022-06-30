import * as cards from "./cardDefs";

/*

B=====D~~~~ BIG ASS TO-DO ~~~~Cl=====l3

incorporate limbs into combat

create combat loop

create functions for taking in user stats vs opponent stats (factoring in armor mods) to check for hit chance/effectiveness

give cards a method to calculate the possible ranges of their effective areas

account for all possible targets/target ranges for cards (i.e. self/target/self-aoe/target-aoe)

dismemberment system (see below)

system for managing card access (i.e. if a limb depends on a card, disabling the card)



*/


export class Cards {
  constructor(defs) {
    //Should be an array
    this.afflictions = defs.afflictions;
    this.range = defs.range;
    this.description = defs.description;
    this.sMsg = defs.sMsg;
    this.fMsg = defs.fMsg;
  }

  displaySuccessMessage(origin, target) {
    console.log(this.sMsg(origin, target));
  }

  displayFailMessage(origin, target) {
    console.log(this.fMsg(origin, target));
  }
}

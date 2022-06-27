import * as cards from "./cardDefs";

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

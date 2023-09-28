import { sum, sub } from "../../utils/math";

/*
Affliction types: 
Wasting - Fatigue/Pain/Bleeding
**never lingering**
**never precipitates**
** **

Psychic - Fear/Confusion
Physical - Wounds(limb)
Lingering - Scar(limb)/Severed(limb)
Stat Boons - 
Body Modifications - Prosthesis/Scarification/
 */

export class Afflcition {
  /*




  */

  static runAfflictionCycle(stats) {
    let statVal = stats[this.stat];
    switch (this.operation) {
      case "add":
        statVal = sum(stats[this.stat], this.magnitude) * this.stacks;
        stats.setStat(this.stat, statVal);
      case "subtract":
        statVal = sub(stats[this.stat], this.magnitude * this.stacks);
        stats.setStat(this.stat, statVal);
    }
  }

  static removeAfflictionStacks(amt) {
    if (this.stacks - amt >= 0) {
      this.stacks = this.stacks - amt;
    } else if (this.stacks - amt < 0) {
      this.stacks = 0;
    }
  }

  static addAfflictionStacks(amt) {
    return this.stacks + amt;
  }

  constructor(name, stat, magnitude, freq, operation, stacks) {
    this.name = name;
    // this.stat = stat;
    // this.magnitude = magnitude;
    // this.freq = freq;
    // this.operation = operation;
    // this.stacks = stacks;
    //this.description
    this.isPermanent = false;
    this.hasStacks = true;
    this.affectsStats = true;
    this.hasLifespan = false;
    this.healedByOwner = true;
    this.healedByCards = true;
    this.generatesCards = false;
  }
}

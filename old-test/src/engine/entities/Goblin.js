import { Entity } from "./Entity";
import { Stats } from "./Stats";
import { Morphotype } from "./Morphotype";

export class Goblin extends Entity {
  //vl = value, vr = variance, mlt = multiplier, bs = bias, dp = dependenies
  static goblinStatDefs = {
    base: {
      might: { vl: 5, vr: 2, bs: 0 },
      stamina: { vl: 5, vr: 2, bs: 0 },
      stamina: { vl: 5, vr: 2, bs: 0 },
      skill: { vl: 5, vr: 2, bs: 0 },
      deftness: { vl: 5, vr: 2, bs: 0 },
      toughness: { vl: 5, vr: 2, bs: 0 },
      grit: { vl: 5, vr: 2, bs: 0 },
    },
    second: {
      currentAP: { dp: ["skill", "deftness"], mlt: 0.5 },
      consciousness: { dp: ["toughness", "stamina"], mlt: 1.5 }, //Tgh/Stam
      morale: { dp: ["grit", "toughness"], mlt: 1.5 }, //Grit/Tgh
      blood: { dp: ["toughness", "might", "stamina"], mlt: 1.5 }, //Tgh
      fatigue: { dp: ["grit", "stamina"], mlt: 1.5 }, //Grit/Stam
    },
  };

  constructor() {
    //name, stats, morphotype
    super(
      Entity.generateName("goblin"),
      new Stats(Goblin.goblinStatDefs),
      Morphotype.generateMorphoType("goblin")
    );

    this.size = "short";
    this.bodyType = "wirey";
  }
}

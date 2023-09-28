//vl = value, vr = variance, mlt = multiplier, bs = bias, dp = dependenies

export const goblinStatDefs = {
  base: {
    strength: { vl: 5, vr: 2, bs: 0 },
    stamina: { vl: 5, vr: 2, bs: 0 },
    stamina: { vl: 5, vr: 2, bs: 0 },
    skill: { vl: 5, vr: 2, bs: 0 },
    deftness: { vl: 5, vr: 2, bs: 0 },
    toughness: { vl: 5, vr: 2, bs: 0 },
    grit: { vl: 5, vr: 2, bs: 0 },
  },
  second: {
    currentAP: {dp: ["skill", "deftness"], mlt: 0.5},
    consciousness: { dp: ["toughness", "stamina"], mlt: 1.5 }, //Tgh/Stam
    morale: { dp: ["grit", "toughness"], mlt: 1.5 }, //Grit/Tgh
    blood: { dp: ["toughness", "strength", "stamina"], mlt: 1.5 }, //Tgh
    fatigue: { dp: ["grit", "stamina"], mlt: 1.5 }, //Grit/Stam
  },
};

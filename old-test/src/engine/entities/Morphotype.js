import { Grid } from "../../utils/dataManip/Grid";

export class Morphotype {
  static humanoids = [
    "goblin",
    "bugbear",
    "troll",
    "ork",
    "gremlin",
    "hobgoblin",
    "ogre",
  ];

  static humanoid = {
    head: ["neck", "lEye", "rEye", "nose", "jaw", "tongue"],
    lEye: ["head"],
    rEye: ["head"],
    nose: ["head"],
    jaw: ["head"],
    tongue: ["head"],
    neck: ["torso"],
    torso: ["neck", "abdomen", "lArm", "rArm"],
    lArm: ["torso"],
    rArm: ["torso"],
    abdomen: ["lLeg", "rLeg"],
    lLeg: ["abdomen"],
    rLeg: ["abdomen"],
  };

  static generateMorphoType(race) {
    let morphotype = {};
    if (Morphotype.humanoids.includes(race)) {
      morphotype = new Grid(Morphotype.humanoid);
      delete morphotype.pattern;
    }
    return morphotype;
  }
}

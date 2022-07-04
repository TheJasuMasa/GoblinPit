import { Afflcition } from "../afflictions/Affliction";
import { v4 as uuid } from "uuid";
import { nameDefs } from "./nameDefs";
import { getRandomIndex } from "../../utils/random";
import { makeUppercase } from "../../utils/makeUppercase";
//Find a more succinct way to handle imports for entity generation

export class Entity {
  static generateNomen = (arr) => {
    return arr[getRandomIndex(arr)];
  };

  //Generate any combination of names given an array of patterns (specified in namedefs)
  //An anthroponym refers to a single unit of a full name i.e. first name, middle name, title etc...
  static generateFullNomen = (raceNomenDef) => {
    const nomenPattern = this.generateNomen(raceNomenDef.nameStructures);
    let fullNomen = nomenPattern.reduce((acc, i) => {
      if (i - 1 < 0) {
        return acc + " ";
      } else {
        const anthroponym = Object.values(raceNomenDef.anthroponyms[i - 1])[0];
        return acc + this.generateNomen(anthroponym);
      }
    }, "");
    return makeUppercase(fullNomen);
  };

  static generateName(race) {
    switch (race) {
      case "goblin":
        return this.generateFullNomen(nameDefs.goblin);
      case "ork":
        return generateFullNomen(nameDefs.ork);
      case "gremlin":
        return generateFullNomen(nameDefs.gremlin);
      case "hobgoblin":
        return generateFullNomen(nameDefs.hobgoblin);
      case "bugbear":
        return generateFullNomen(nameDefs.bugbear);
      case "ogre":
        return generateFullNomen(nameDefs.ogre);
      case "troll":
        return generateFullNomen(nameDefs.troll);
    }
  }

  //Add affliction to entity's affliction array
  static addAffliction(affliction, stacks) {
    affliction.stacks = stacks;
    let afflictionNames = this.afflictions.reduce((acc, affliction) => {
      acc = [...acc, affliction.name];
      return acc;
    }, []);
    if (!afflictionNames.includes(affliction.name)) {
      const afflictionVals = Object.values(affliction);
      const afflictionObj = new Afflcitions(...afflictionVals);
      this.afflictions.push(afflictionObj);
    } else if (afflictionNames.includes(affliction.name)) {
      const toModify = this.afflictions.filter(
        (obj) => (obj.name = affliction.name)
      );
      toModify[0].stacks += stacks;
      // this.afflictions[indexOf(affliction)].stacks += affliction.stacks;
    }
  }

  static cycleAfflictions() {
    this.afflictions.forEach((affliction) => {
      affliction.runAfflictionCycle(this.stats);
    });
    console.log(this.afflictions);
  }

  static getEntityById(array, id) {
    return array.filter((entity) => entity.id === id)[0];
  }

  constructor(name, stats, morphotype) {
    this.id = uuid();
    this.name = name;
    this.stats = stats;
    this.morphotype = morphotype;
    this.afflictions = [];
  }
}

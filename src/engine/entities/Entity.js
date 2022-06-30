import { Afflcitions } from "../afflictions/Afflictions";
import { Stats } from "./Stats";
import { Graph } from "../../utils/dataManip/Grid";
import { humanoid } from "./morphotypeDefs";
import { goblinStatDefs } from "./statDefs";
import { generateName } from "./nameGenerator";
import { v4 as uuid } from "uuid";
//Find a more succinct way to handle imports for entity generation

export class Entity {
  constructor() {
    this.id = uuid();
    this.name = null;
    this.stats = null;
    this.morphotype = null;
    this.afflictions = [];

    this.initializeEntity();
  }

  initializeEntity() {
    this.morphotype = new Graph(humanoid);
    this.name = generateName(this.race);
    this.stats = new Stats(goblinStatDefs);
  }

  addAffliction(affliction, stacks) {
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

  cycleAfflictions() {
    this.afflictions.forEach((affliction) => {
      affliction.runAfflictionCycle(this.stats);
    });
    console.log(this.afflictions);
  }
}

export class Goblin extends Entity {
  constructor(race) {
    super();
    this.race = "goblin";
  }
}

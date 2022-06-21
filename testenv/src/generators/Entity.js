import { Stats } from "./Stats";
import { Graph } from "../utils/dataManip/Grid";
import { humanoid } from "../../../src/generators/morphotypeDefs";
import { goblinStatDefs } from "../../../src/generators/statDefs";
import { generateName } from "../../../src/generators/nameGenerator";
import { v4 as uuid } from "uuid";
//Find a more succinct way to handle imports for entity generation

export class Entity {
  constructor() {
    this.id = uuid();
    this.race = null;
    this.name = null;
    this.stats = null;
    this.morphotype = null;

    this.initializeEntity();
  }

  initializeEntity() {
    this.race = "goblin";
    this.morphotype = new Graph(humanoid);
    this.name = generateName(this.race);
    this.stats = new Stats(goblinStatDefs);
  }
}

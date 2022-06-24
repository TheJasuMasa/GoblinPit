import { Stats } from "./Stats";
import { Graph } from "../utils/dataManip/Grid";
import { Sprites } from "./Sprites"
import { humanoid } from "./morphotypeDefs";
import { goblinStatDefs } from "./statDefs";
import { generateName } from "./nameGenerator";
import { v4 as uuid } from "uuid";
//Find a more succinct way to handle imports for entity generation

export class Entity {
  constructor(race) {
    this.id = uuid();
    this.race = race;
    this.name = null;
    this.stats = null;
    this.sprite = null;
    this.morphotype = null;
    this.xPos = 0
    this.yPos = 0
    this.initializeEntity();
  }

  initializeEntity() {
    //this.morphotype = new Graph(humanoid);
    this.name = generateName(this.race);
    //this.stats = new Stats(goblinStatDefs);
    this.sprite = new Sprites(this)
  }
}

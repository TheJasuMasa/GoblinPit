import { Goblin } from "./engine/entities/Goblin";
import { TurnLoop } from "./engine/combat/TurnLoop";
import * as combat from "./engine/combat/combatLoop";

const combatantArray = [];

for (let i = 0; i < 8; i++) {
  combatantArray.push(new Goblin());
}

let loop = new TurnLoop(combatantArray);
console.log(combatantArray);
console.log(loop);

console.log(TurnLoop.getLowestInitiative(loop.turnOrder));

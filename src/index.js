import { Goblin } from "./engine/entities/Goblin";
import { TurnLoop } from "./engine/combat/TurnLoop";
import * as combat from "./engine/combat/combatLoop";
import { Event } from "./engine/combat/Event";

const combatantArray = [];

for (let i = 0; i < 8; i++) {
  combatantArray.push(new Goblin());
}

let loop = new TurnLoop(combatantArray);

console.log(combatantArray);
loop.removeCombatant(combatantArray[3], combatantArray);

console.log(loop);

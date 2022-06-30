import { Goblin } from "./engine/entities/Entity";
import { Entity } from "./engine/entities/Entity";

const loo = new Goblin("goblin");

console.log(loo);

console.log(loo instanceof Entity);
console.log(loo instanceof Goblin);

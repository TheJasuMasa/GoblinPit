import { Entity } from "./generators/Entity";

const exsanguination = {
  name: "exsanguination",
  stat: "blood",
  magnitude: 1,
  freq: 1,
  operation: "subtract",
};

const body = document.querySelector("body");
const div = document.createElement("div");
div.textContent = "Sup";
body.appendChild(div);

const looStats = new Entity();
looStats.addAffliction(exsanguination, 3);
console.log(looStats.stats);
looStats.cycleAfflictions();
console.log(looStats.stats);
looStats.addAffliction(exsanguination, 3);
looStats.cycleAfflictions();
console.log(looStats.stats);

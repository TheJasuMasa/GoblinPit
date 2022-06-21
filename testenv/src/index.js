import { Entity } from "./generators/Entity";

const body = document.querySelector("body");
const div = document.createElement("div");
div.textContent = "Sup";
body.appendChild(div);

const looStats = new Entity();
console.log(looStats);

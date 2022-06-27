import { Cards } from "./generators/Cards";
import { cards } from "./generators/cardDefs";

const body = document.querySelector("body");
const div = document.createElement("div");
div.textContent = "Sup";
body.appendChild(div);

const test = new Cards(cards.bite);
test.displayFailMessage("Boogie", "Woogie");


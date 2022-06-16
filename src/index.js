import Phaser from "phaser";
import { debugScene } from "./scenes/debug";
import { TitleScreen } from "./scenes/TitleScreen";
import { RandBattle } from "./scenes/RandBattle";
import { combatUI } from "./scenes/combatUI";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "daPit",
  pixelArt: true,
  dom: {
    createContainer: true,
  },
  scene: [
    {
      preload: preload,
      create: create,
      update: update,
    },
    TitleScreen,
    RandBattle,
    combatUI,
  ],
};

const game = new Phaser.Game(config);
const bootGame = new debugScene();

function preload() {}

function create() {
  this.scene.start("titleScreen");
}

function update() {}

// function update() {}
// import { Goblin } from "./wutGobbosIz";
// const pingo = new Goblin("1", "Pingo", "Stronk", "Some's missin'");
// const gobDiv = document.getElementById("gobbo");
// gobDiv.textContent = JSON.stringify(pingo, null, 2);

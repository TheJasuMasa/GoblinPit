import Phaser from "phaser";
import { ASSET_PATH } from "./pathDefs";
import { debugScene } from "./debug";
import { TitleScreen } from "./TitleScreen";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [
    {
      preload: preload,
      create: create,
      update: update,
    },
    TitleScreen,
  ],
};


const game = new Phaser.Game(config);
const bootGame = new debugScene();

function preload() {
}

function create() {
  this.scene.start("titleScreen")
  
}

function update() {
  
}


// function update() {}
// import { Goblin } from "./wutGobbosIz";
// const pingo = new Goblin("1", "Pingo", "Stronk", "Some's missin'");
// const gobDiv = document.getElementById("gobbo");
// gobDiv.textContent = JSON.stringify(pingo, null, 2);

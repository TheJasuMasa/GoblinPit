import { PATHS } from "./pathDefs";
import { Goblin } from "./wutGobbosIz";

export class combatUI extends Phaser.Scene {
  constructor() {
    super("combatUI");
  }

  bite(attacker, defender) {
    let damageDone = attacker.stats.str - defender.stats.tgh + 1;
    defender.stats.hp -= damageDone;
    console.log(damageDone);
    console.log(defender.stats.hp);
  }

  preload() {
    this.load.image(
      "combatTestButtonBite",
      `${PATHS.UI}/combatTestButtonBite.png`
    );
  }

  create() {
    this.testButtonImage = this.add
      .image(300, 550, "combatTestButtonBite")
      .setInteractive();
    this.testButtonImage.setScale(2);
    this.chung = new Goblin(
      0,
      "Chung",
      { hp: 12, str: 3, skil: 1, deft: 1, tgh: 4 },
      "arms innit"
    );
    this.grung = new Goblin(
      0,
      "Grung",
      { hp: 14, str: 5, skil: 2, deft: 2, tgh: 4 },
      "arms innit"
    );

    // this.testButtonImage.on('pointerdown',function(pointer){
    //     console.log('why')
    //    this.bite(this.chung,this.grung)
    // })
    console.log(this);
    this.testButtonImage.on(
      "pointerdown",
      this.bite(this.chung, this.grung),
      this
    );

    this.bite(this.chung, this.grung);
  }

  update() {
    // this.bite(this.chung,this.grung)
  }
}

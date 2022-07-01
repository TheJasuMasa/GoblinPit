import { TurnLog } from "./TurnLog";

export class TurnLoop {
  //Calculates the initiative for a combatant
  static getInitiative(combatant) {
    return (
      combatant.stats.deftness.tmp +
      combatant.stats.morale.tmp *
        (combatant.stats.consciousness.mod / combatant.stats.consciousness.tmp)
    );
  }

  //Find and return the item(s) with the lowest initiative. Returns a number
  static getLowestInitiative(array) {
    console.log("getting lowest initiative");
    let lowestChecked = Object.values(array[0])[0];
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
      let combatant = Object.keys(array[i])[0];
      let initiative = Object.values(array[i])[0];
      if (initiative < lowestChecked) {
        lowestChecked = initiative;
      }
    }
    return lowestChecked;
  }

  //Gets the turn order before combat loop initializes
  static intitializeTurnOrder(combatants) {
    let initCalc = combatants.map((combatant) => {
      return { [combatant.id]: TurnLoop.getInitiative(combatant) };
    });
    return initCalc;
  }

  //Arranges the order of an array of combatants who all have the same initiative value
  static getPriority() {}

  constructor(combatants) {
    this.turnOrder = TurnLoop.intitializeTurnOrder(combatants);
    this.turnNo = 0;
    this.log = new TurnLog(0);
    this.debug = new TurnLog(0);
  }

  //Take a combatant outside of the turn order in case of death/incapacitation
  removeCombatant(combatant) {}

  //Update the turn order (calculated after every event)
  updateTurnOrder() {}

  //Arranges turn order based on initiative values
  arrangeTurnOrder() {
    let newOrder = [];
    while (this.turnOrder.length !== 0) {
      let pushArray = [];
      let lowest = TurnLoop.getLowestInitiative(this.turnOrder);
      this.turnOrder.forEach((combatant, i) => {
        if (Object.values(combatant)[0] === lowest) {
          pushArray.push(this.turnOrder[i]);
          this.turnOrder.splice(i);
        }
      });
      newOrder.push(...pushArray);
    }
  }
}

// const filteredArray = array.filter((item) => {
//   return Object.values(item)[0] === lowestChecked;
// });
// return filteredArray;

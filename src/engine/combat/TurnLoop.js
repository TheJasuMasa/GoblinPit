import { TurnLog } from "./TurnLog";
import { Event } from "./Event";

export class TurnLoop {
  //Defines the structure and content of messeges emmited by this class
  //Pattern key - 0 = message string (to be read from an array),
  //1 = name of subject entity,
  //2 = name of object entity(s) to be read from an array,
  //3 = dynamic values computed and passed to the event generator function as an array
  //4 = tag indicating that it is a debug message
  static events = {
    entityIsNext: {
      pattern: [0, 1, 0],
      message: ["It is now ", "'s turn!"],
    },
    entityIsFirst: {
      pattern: [1, 0],
      message: [" is first to go!"],
    },
    entityPosIsChangedt: {
      pattern: [1, 0, 3, 0, 3, 0],
      message: ["'s turn is now ", " instead of ", "!"],
    },
    turnInitialized: {
      pattern: [4, 0],
      message: ["Turn initialized"],
    },
    turnArranged: {
      pattern: [4, 0],
      message: ["Turn arranged"],
    },
  };

  //Calculates the initiative for a combatant
  static getInitiative(combatant) {
    return (
      combatant.stats.deftness.tmp +
      combatant.stats.morale.tmp *
        (combatant.stats.consciousness.mod / combatant.stats.consciousness.tmp)
    );
  }

  //Calculates the 'rank' of the combatant which is a summation of all of their base stats to decide order when intiatives are equal
  static getRank(combatant) {
    const entries = Object.entries(combatant.stats);
    const rank = entries.reduce((acc, stat) => acc + stat[1].base, 0);
    return rank;
  }

  //Find and return the item with the lowest value of the provided property
  static getLowest(array, prop) {
    let lowestChecked = Object.values(array[0])[0][prop];
    for (let i = 0; i < array.length; i++) {
      let combatant = Object.keys(array[i])[0];
      let value = Object.values(array[i])[0][prop];
      if (value < lowestChecked) {
        lowestChecked = value;
      }
    }
    return lowestChecked;
  }

  //Arranges the order of an array of combatants who all have the same initiative value based on rank
  static getPriority(array) {
    console.log("initial length");
    console.log(array.length);
    let newOrder = [];
    while (array.length !== 0) {
      let lowest = TurnLoop.getLowest(array, "rank");
      array.forEach((combatant, i) => {
        if (Object.values(combatant)[0].rank === lowest) {
          newOrder.push(array[i]);
          array.splice(i, 1);
        }
      });
    }
    console.log("final length");
    console.log(newOrder.length);
    return newOrder;
  }

  //Gets the turn order before combat loop initializes
  static setInitialTurnOrder(combatants) {
    let initArray = combatants.map((combatant) => {
      return {
        [combatant.id]: {
          init: TurnLoop.getInitiative(combatant),
          rank: TurnLoop.getRank(combatant),
        },
      };
    });
    console.log("init array");
    console.log(initArray);
    return initArray;
  }

  constructor(combatants) {
    this.turnNo = 0;
    this.finished = false;
    this.log = new TurnLog(0);
    this.debug = new TurnLog(0);

    this.intitializeTurnOrder(combatants);
  }

  //Take a combatant outside of the turn order in case of death/incapacitation and emit an event
  removeCombatant(combatant) {}

  //Add a combatant to the turn order and emit an event
  addCombatant(combatant) {}

  //Update the turn order (calculated after every event)
  updateTurnOrder() {}

  //Arranges turn order based on initiative values
  arrangeTurnOrder() {
    let newOrder = [];
    while (this.turnOrder.length !== 0) {
      let pushArray = [];
      let lowest = TurnLoop.getLowest(this.turnOrder, "init");
      this.turnOrder.forEach((combatant, i) => {
        if (Object.values(combatant)[0].init === lowest) {
          pushArray.push(this.turnOrder[i]);
          this.turnOrder.splice(i, 1);
        }
      });
      if (pushArray.length > 1) {
        pushArray = TurnLoop.getPriority(pushArray);
      }
      newOrder.push([...pushArray]);
    }
    this.turnOrder = newOrder;
    const eventProps = TurnLoop.events.turnArranged;
    eventProps.debugData = {};
    Object.assign(eventProps.debugData, newOrder);
    this.debug.addEvent(Event.generateMessage(eventProps));
  }

  intitializeTurnOrder(combatants) {
    this.turnOrder = TurnLoop.setInitialTurnOrder(combatants);
    const eventProps = TurnLoop.events.turnInitialized;
    eventProps.debugData = {};
    Object.assign(
      eventProps.debugData,
      TurnLoop.setInitialTurnOrder(combatants)
    );
    this.debug.addEvent(Event.generateMessage(eventProps));
    this.arrangeTurnOrder();
  }
}

// const filteredArray = array.filter((item) => {
//   return Object.values(item)[0] === lowestChecked;
// });
// return filteredArray;

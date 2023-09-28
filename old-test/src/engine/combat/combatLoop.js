export function mainLoop() {}

export function turnCounter() {}

export function entityLoop() {}
//Takes an array of all combatants currently in combat

//Turn Order Functions

export function getInitiative(combatant) {
  return (
    combatant.stats.deftness.tmp +
    combatant.stats.morale.tmp *
      (combatant.stats.consciousness.mod / combatant.stats.consciousness.tmp)
  );
}

export function getTurnOrder(combatants) {
  let initCalc = combatants.map((combatant) => {
    return [combatant.id, getInitiative(combatant)];
  });

  console.log(initCalc);
}

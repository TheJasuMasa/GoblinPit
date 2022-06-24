import { getRandomValue } from "../utils/random";

export class Stats {
  constructor(statDefs) {
    this.strength = 0;
    this.stamina = 0;
    this.skill = 0;
    this.deftness = 0;
    this.toughness = 0;
    this.grit = 0;
    this.consciousness = 0;
    this.morale = 0;
    this.blood = 0;
    this.fatigue = 0;

    this.initializeBaseStats(statDefs);
    this.initializeSecondaryStats(statDefs);
  }

  initializeBaseStats(statDefs) {
    const baseStatArray = Object.keys(statDefs.base);
    baseStatArray.forEach((stat) => {
      const statValue = this.calculateStat(
        statDefs.base[stat].vl,
        statDefs.base[stat].vr
      );
      this.setStat(stat, statValue);
    });
  }

  initializeSecondaryStats(statDefs) {
    const secondaryStatArray = Object.keys(statDefs.second);
    secondaryStatArray.forEach((stat) => {
      const statObj = statDefs.second[stat];
      const sum = statObj.dp.reduce((acc, val) => {
        return acc + this[val];
      }, 0);
      this.setStat(stat, Math.floor(sum * statObj.mlt));
    });
  }

  calculateStat(vl, vr) {
    const operator = Math.random();
    if (operator > 0.5 && operator <= 1) {
      return vl + getRandomValue(vr);
    } else if (operator <= 0.5) {
      return vl - getRandomValue(vr);
    }
  }

  setStat(stat, val) {
    this[stat] = val;
  }

  getStat(statString) {
    return this[statString];
  }
}

import { getRandomValue } from "../../utils/random";

export class Stat {
  constructor(val) {
    this.base = val;
    this.mod = val;
    this.tmp = val;
  }
}

export class Stats {
  constructor(statDefs) {
    this.might = null;
    this.stamina = null;
    this.skill = null;
    this.deftness = null;
    this.toughness = null;
    this.grit = null;
    this.consciousness = null;
    this.morale = null;
    this.blood = null;
    this.fatigue = null;

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
        return acc + this[val].base;
      }, 0);
      let val = Math.floor(sum * statObj.mlt);
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
    this[stat] = new Stat(val);
  }

  getStat(statString) {
    return this[statString];
  }
}

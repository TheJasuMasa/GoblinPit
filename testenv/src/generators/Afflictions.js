import { sum, sub } from "../utils/math";

export class Afflcitions {
  constructor(name, stat, magnitude, freq, operation, stacks) {
    this.name = name;
    this.stat = stat;
    this.magnitude = magnitude;
    this.freq = freq;
    this.operation = operation;
    this.stacks = stacks;
  }

  runAfflictionCycle(stats) {
    let statVal = stats[this.stat];
    switch (this.operation) {
      case "add":
        statVal = sum(stats[this.stat], this.magnitude) * this.stacks;
        stats.setStat(this.stat, statVal);
      case "subtract":
        statVal = sub(stats[this.stat], this.magnitude * this.stacks);
        stats.setStat(this.stat, statVal);
    }
  }

  removeAfflictionStacks(amt) {
    if (this.stacks - amt >= 0) {
      this.stacks = this.stacks - amt;
    } else if (this.stacks - amt < 0) {
      this.stacks = 0;
    }
  }

  addAfflictionStacks(amt) {
    return this.stacks + amt;
  }
}

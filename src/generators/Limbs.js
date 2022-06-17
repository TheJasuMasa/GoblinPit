//Will define all potential properties of limbs
//Plan on using graph data structures for detection of severed limbs and their connected bits

export class Arm {
  constructor(strength, skills, attached = true, injuries = false) {
    this.strength = strength;
    this.skills = skills;
    this.attached = attached;
    this.injuries = injuries;
  }
}

export class Leg {
  constructor(strength, skills, attached = true, injuries = false) {
    this.strength = strength;
    this.skills = skills;
    this.attached = attached;
    this.injuries = injuries;
  }
}

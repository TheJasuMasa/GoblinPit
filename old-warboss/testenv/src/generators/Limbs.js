//Will define all potential properties of limbs
//Plan on using graph data structures for detection of severed limbs and their connected bits

export class Limb {
  constructor(
    type,
    strength,
    skills,
    attached = true,
    injuries = false,
    side = null,
    severancePenalty,
    graftables
  ) {
    this.type = type;
    this.strength = strength;
    this.skills = skills;
    this.attached = attached;
    this.injuries = injuries;
    this.side = side;
    this.severancePenalty = severancePenalty;
    this.graftables = graftables;
  }
}

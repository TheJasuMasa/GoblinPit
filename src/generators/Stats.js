class Stats {
  constructor(raceDefs) {
    this.morale = 0;
    this.stamina = 0;
    this.skill = 0;
    this.defness = 0;
    this.toughness = 0;
    this.grit = 0;
    this.consciousness = 0;
    this.blood = 0;
    this.fatigue = 0;

    this.generateBaseStats(raceDefs);
    this.generateSecondaryStats(raceDefs);
  }

  generateBaseStats(raceDefs) {}

  generateSecondaryStats(raceDefs) {}

  setStat(stat, val) {}
}

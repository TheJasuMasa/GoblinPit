import { PATHS } from "./pathDefs";

export class Goblin {
  constructor(id, name, stats, limbDefs, bodySprite, headSprite, [xPos,yPos]) {
    this.id = id;
    this.name = name;
    this.stats = stats;
    this.limbdefs = limbDefs;
    this.bodySprite = bodySprite;
    this.headSprite = headSprite
    this.xPos = xPos
    this.yPos = yPos
  }
  // List of sprite heads and body variations to staple together.
  static goblinBodyTypes = [
    `${PATHS.sprites}/gobboBody1SS.png`,`${PATHS.sprites}/gobboBody2SS.png`]
  static goblinHeadTypes = [
    `${PATHS.sprites}/gobboHead1SS.png`,`${PATHS.sprites}/gobboHead2SS.png`,
    `${PATHS.sprites}/gobboHead3SS.png`,`${PATHS.sprites}/gobboHead4SS.png`]


}


export class TurnLog {
  constructor() {
    this.turnNo = null;
    this.events = [];
  }

  setTurnNo(input) {
    this.turnNo = input;
  }

  addEvent(input) {
    this.events.push(input);
  }
}

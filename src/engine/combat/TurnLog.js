export class TurnLog {
  constructor() {
    this.turnNo = null;
    this.events = [];
  }

  setTurnNo(input) {
    this.turnNo = input;
  }

  addEvent(event) {
    this.events.push(input);
  }
}

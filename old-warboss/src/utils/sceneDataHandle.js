// import Phaser from "phaser";

// const sceneDataHandler = new Phaser.Events.EventEmitter()

// export default sceneDataHandler

let instance = null

class EventDispatcher extends Phaser.Events.EventEmitter {
    constructor() {
        super();
        if (instance == null) {
            instance=this;
        }
    }
    static getInstance() {
        if (instance == null) {
            instance=new EventDispatcher()
        }
        return instance
    }
}
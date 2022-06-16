import {Goblin} from '../wutGobbosIz.js'


export class debugScene extends Phaser.Scene {
  constructor() {
    super("debug");
  }

  preload() {}

  create() {

    const schittle = new Goblin('1','Schittle', 'WEEEAK', {donger: 'flopsy'} )
    const loo = new Goblin('2','Loo','Shit',{arms: 'wiggly', legs: 'skinny'})
    // const myObj = {rug: 'iz big', schittle: 'iz stank', loo: 'iz dink'}
    
    this.add.text(40, 20, JSON.stringify(schittle, null, 2) + JSON.stringify(loo, null, 2), {fill:"yellow", fontSize:"12px"});
  }

  update() {}
}


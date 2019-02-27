const { createMixableClass } = require('../mixable')
const { Flyer } = require('./Flyer.class')
const { Swimmer } = require('./Swimmer.class')

export const FlyingFish = createMixableClass({
  name: 'FlyingFish',
  inherits: [ Flyer, Swimmer ],
  body: class {

    _constructor() {
      this.die()
    }
  
    avoidPredator() {
      this.riseToSurface()
      this.takeOff()
      this.land()
      this.diveDown()
    }
  
  }
  
})
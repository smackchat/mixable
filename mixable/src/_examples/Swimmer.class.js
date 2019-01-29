const { createMixableClass } = require('../mixable')

const { Animal } = require('./Animal.class')

export const Swimmer = createMixableClass({
  name: 'Swimmer',
  inherits: [ Animal ],
  body: class {

    currentPosition
    MAX_DEPTH
  
    _constructor(params) {
      this.currentPosition = 'surface'
      this.MAX_DEPTH = params.maxDepth
    }
  
    getCaughtInNet() {
      this.die()
    }
  
    diveDown() {
      this.currentPosition = 'deep'
      return 'a string'
    }
  
    riseToSurface() {
      this.currentPosition = 'surface'
    }
  
    position() {
      return this.currentPosition
    }
  
  }
})
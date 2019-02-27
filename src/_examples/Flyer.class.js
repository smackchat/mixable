import { createMixableClass } from '../mixable'
import { Animal } from './Animal.class'

export const Flyer = createMixableClass({
  name: 'Flyer',
  inherits: [ Animal ],
  body: class {

    static flyerStatic() {
      return Flyer.staticUsingClass() + 'flyer contribution'
    }
  
    crashIntoWindow() {
      this.die()
    }
  
    diveDown() { return 3 }
  
    land() { }
  
    takeOff() { }
  
  }
})
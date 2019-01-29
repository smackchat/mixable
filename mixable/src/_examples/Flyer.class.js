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
//child called befroe parent 
// _constructor defined with underscore
//if both the child and the parent define a method of the same name, then the child will overwrite, and end up with the child's version.
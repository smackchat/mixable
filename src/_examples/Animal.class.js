import { createMixableClass } from '../mixable'

export const Animal = createMixableClass({
  name: 'Animal',
  body: class {

    static staticProp = 'static prop'
  
    static staticThing() {
      return 'static return'
    }

    static staticUsingClass() {
      return Animal.staticThing() + 'added bit'
    }
  
    exampleProp
    alive = true
    privateProp = false
    //explain in doc
    _constructor(params) {
        console.log("hello")
        this.exampleProp = 'example'
        this.alive = true
    }
  
    die() { 
      this.alive = false
    }
  
    isAlive() {
      return this.alive
    }
  
    breathe() {
      if (!this.alive) 
        throw new Error('is dead!')
    } 
  
  }
})


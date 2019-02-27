# <img src="assets/fishy-the-fish.jpg" height='50' /> mixable 

**Multiple inheritance library for JavaScript.** <br/>
It allows you to make classes that inherit from multiple parents.

### Setup
`npm install @smackchat/mixable` or `yarn add @smackchat/mixable` 

### Usage:

`MixableClasses` can only inherit from other `MixableClasses`, and are created with `createMixableClass()`

Let's create an `Animal` class:
```javascript
import { createMixableClass } from '@smackchat/mixable'

const Animal = createMixableClass({
  name: 'Animal',
  body: class {
  
    alive = true
    
    die() {
      this.alive = false 
    }
    
  }
})
```

We can instantiate it like a normal class.
```javascript
const animal = new Animal()
console.log(animal.alive) // true
animal.die()
console.log(animal.alive) // false
```

Now we'll need a `Flyer` class that inherits from our `Animal`:
```javascript
import { createMixableClass } from '@smackchat/mixable'
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
```
and Now a `Swimmer` class that inherits from  `Animal`:
```javascript
const { createMixableClass } = require('@smackchat/mixable')
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
```
And finally, we can create our `FlyingFish` class that inherits from `Flyer` and `Swimmer`:
```javascript
const { MixableClass } =  require('@smackchat/mixable')
const { Flyer } =  require('./Flyer.class')
const { Swimmer } =  require('./Swimmer.class')
export const FlyingFish =  MixableClass({
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
```
**Useful methods of Mixables:**
```javascript
// Instantiation:
const FishyTheFish = new FlyingFish({ name: 'fishy the fish', maxDepth: 200 })

// Useful methods:

FishyTheFish.className() 
  // returns 'FlyingFish'
  
FishyTheFish.constructors() 
  // returns an array of its parents name and constructors
  
  // In this example the order will be:
FishyTheFish.constructors()[0].name // returns 'Animal'
FishyTheFish.constructors()[1].name // returns 'Swimmer'
FishyTheFish.constructors()[2].name // returns 'Flyer'
FishyTheFish.constructors()[3].name // returns 'FlyingFish'

FishyTheFish.constructors()[0]._constructor()
  // calls the contstructor of Animal

// You can also check for inheritance:
FishyTheFish.inheritsFrom(Animal) // returns true
FishyTheFish.is(Animal) // returns true
```
**Important Information**
- The children will get called before the parent
- If a child and a parent define a method of the same name, then the child's method will overwrite the parent.

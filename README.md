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
  
    static totalNumber() {
      return Animal.totalNumber
    }
  
    _constructor() {
      this.alive = false
      if (Animal.totalNumber)
        Animal.totalNumber++
      else Animal.totalNumber = 1
    }
    
    die() {
      this.alive = false 
    }
    
  }
})
```

We can instantiate it like a normal class.
```javascript
const animal = new Animal()

console.log(shark.is(Animal)) // true
console.log(Animal.totalNumber()) // 1
console.log(animal.alive) // true

animal.die()
console.log(animal.alive) // false
```

Due to ECMAScript `class` limitations, we use `_constructor()` instead of `constructor()`.
For the same reason, properties assigned in the class body will be ignored.
```javascript
export const Animal = createMixableClass({
  name: 'Animal',
  body: class {
    
    // WRONG: will be ignored
    alive = false
    
    // WRONG: will be ignored
    constructor() {
      this.alive = false
    }
    
    // CORRECT
    _constructor() {
      this.alive = false
    }
    
  }
})
```

Now we can make a class `Swimmer` that inherits from `Animal`:
```javascript
import { createMixableClass } from '@smackchat/mixable'
import { Animal } from './Animal.class'

export const Swimmer = createMixableClass({
  name: 'Swimmer',
  inherits: [ Animal ],
  body: class {
  
    _constructor({ typeOfWater }) {
      this.typeOfWater = typeOfWater
    }
    
    getCaughtInNet() {
      this.die() // method inherited from Animal
    }
    
  }
})
```

When we can instantiate it, both `_constructor()` functions are called.
```javascript
console.log(Swimmer.inheritsFrom(Animal)) // true
console.log(Swimmer.inheritsFrom(Swimmer)) // true

const shark = new Swimmer({ typeOfWater: 'salty' })

console.log(shark.is(Animal)) // true
console.log(shark.is(Swimmer)) // true
console.log(shark.className()) // 'Swimmer'

console.log(shark.typeOfWater) // 'salty'
console.log(shark.alive) // true

shark.getCaughtInNet()
console.log(shark.alive) // false
```

We can inherit from multiple classes.
```javascript
const { createMixableClass } = require('@smackchat/mixable')
const { Swimmer } = require('./Swimmer.class')
const { Flyer } = require('./Flyer.class')

export const FlyingFish = createMixableClass({
  name: 'FlyingFish',
  inherits: [ Swimmer, Flyer ],
  body: class {
    
    avoidPredator() {
      this.swimToSurface() // inherited from Swimmer
      this.fly() // inherited from Flyer
      this.survive() // inherited from Animal
    }
    
  }
})
```

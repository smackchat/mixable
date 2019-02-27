<h1 style="display:flex; align-items: center; color: lightblue; font-size: 30px"> <img src="assets/fishy-the-fish.jpg" height='45' /> mixable <h1/>

## Table of Content
- Why Mixable?
- Getting Started
	- Setup
	- Usage
## Why Mixable
Mixable is an open source library to support multiple inheritance in JavaScript

## Getting Started
### Setup: 
Use `npm install @smackchat/mixable` or `yarn add @smackchat/mixable` to install mixables package
### Usage:
**All classes need to be instantiated using `createMixableClass()`**
Let's create a `FlyingFish` class!
First, we create an `Animal` class:
```javascript
import { createMixableClass } from '@smackchat/mixable'
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
    _constructor(params) {
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

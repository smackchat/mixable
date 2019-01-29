<p align="center" >
	<img  src="MixableLogo.jpg" width="100px" height="100px"/>
</p>

<h1 align="center" style=" color: lightblue; font-size: 80px"> mixable <h1/>
<h3 align= "center">  <i> multiple inheritance </i> library for js </h3>
<p align="center">
	<img src="logo.jpg" width="222px" height="50px"/>
</p>
<h1>Table of Contents</h1>

<h4>Why mixable?</h4> 


<h4>Getting Started</h4> 

* Setup
* Using  

<h4>Contributing</h4>

* Test

<h1> Why mixable? </h1>

mixable is a open source multiple inheritance library.

It solves the multiple inheritance problem, and provides many useful features when using a mixable Class

<h1>Getting Started</h1>

* SETUP 

	- npm install mixable 
	
	- yarn add mixable


* API references 

	Using **createMixableClass()** pass as an object through the parameter, that holds this format
	
	which returns an instance of MixableClass
	
	
	
	 
	 
		createMixableClass(
		 {
		 name: DEFAULT_CLASS_NAME,
		 inherits: [exclass1, exclass2],
		 body: class { // inside here create new methods for specific class, also create constructor (read details and                  example below for how to write constructor0},
		 staticProps: {}
		}
		)

	 
	 
	Details about instantiating a MixableClass: 
	- Include classes to inherit simply in an array.
	- constructor defined with underscore '_constructor'
	- the child are called before parent 
	- if both the child and the parent define a method of the same name, then the child will overwrite, and you end up 	   with the child's version.


	ex use) from the ./examples directory in Mixable,
	
Animal:

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



	
	
Flyer:
					
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
Swimmer:
		

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

Flying Fish

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
  
  	
Api references attached as properties to your new MixableClass.
	
MixableClass.inheritsFrom()
	
- ex) Swimmer.inheritsFrom(Animal) returns true
	
MixableClass.mixableMeta()
	
- ex) FlyingFish.getMixableMeta(this) returns 
		
		{ name: 'FlyingFish',
		      constructors:
		       [ { name: 'FlyingFish', _constructor: [Function: _constructor] },
			 { name: 'Swimmer', _constructor: [Function: _constructor] },
			 { name: 'Flyer', _constructor: [Function] },
			 { name: 'Animal', _constructor: [Function: _constructor] } ] 
		}
	
MixableClass.constructors()

- ex) Swimmer.constructors() returns
		
		[ { name: 'FlyingFish', _constructor: [Function: _constructor] },
	      { name: 'Swimmer', _constructor: [Function: _constructor] },
	      { name: 'Flyer', _constructor: [Function] },
	      { name: 'Animal', _constructor: [Function: _constructor] } ]
	      

MixableClass.is() 
	
- ex) FlyingFish.is(Animal) returns true
	
		
	To understand an example in use, check out our test file described below in the "Contriuting" section.
	
	
	
*  Edge Cases


	- edge case ex) extend on the functionality of parent. in java is handeld through "super" call. This package fully 	   replaces this method. There are tricks


 
      

<h1>Contributing</h1>



The main purpose of this repository is to continue to evolve mixable core. We are grateful to those who contribute to mixable's system design.


* Test

In the directory where mixable is held, update and run 'yarn test' to perform tests on changes and to see if you made any changes that may have broken the system.

The Test file clearly presents the problem we are trying to solve. Lets say you have a class Swimmer that extends Animal. However, the class FlyingFish is both a Swimmer a Flyer and an Animal. Thus we fall into multiple inheritance problem. 








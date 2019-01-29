<p align="center" >
	<img  src="MixableLogo.jpg" width="100px" height="100px"/>
</p>

<h1 align="center" style=" color: lightblue; font-size: 80px"> Mixable <h1/>

<h3 align= "center">   a <i> multiple inheritance </i> library for js </h3>
<p align="center">
	<img src="logo.jpg" width="222px" height="50px"/>
</p>
<h1>Table of Contents</h1>

<h4>WHY MIXBLE?</h4> 


<h4>GETTING STARTED</h4> 

* SETUP
* USING  

<h4>DETAILS FOR CONTRIUTORS</h4>

* TEST

* HOW IT WORKS

<h1> Why Mixable? </h1>

Mixables is an open source initiative multiple inheritance library.
Which solves the multiple inheritance problem using mixins to move functions.

This is an OpenSource initiative because we could not find a more performant and easy to use library than ours, and for the ability to grow and share it with the community.


<h1>Getting Started</h1>

* SETUP  
		How to set up in other peoples projects


* API references 

	Using **createMixableClass()** pass as an object through the parameter, that holds this format
	
	
	
	 
	 
		createMixableClass(
		 {
		 name: DEFAULT_CLASS_NAME,
		 inherits: [exclass1, exclass2],
		 body: class { // inside here create new methods for specific class, also create constructor (read details and                  example below for how to write constructor},
		 staticProps: {}
		}
		)

	 
	 
	Details about instantiating a MixableClass: 
	- Include classes to inherit simply in an array.
	- constructor defined with underscore '_constructor'
	- the child are called before parent 
	- if both the child and the parent define a method of the same name, then the child will overwrite, and you end up 	   with the child's version.


	ex) from the ./examples directory in Mixable,
		

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
	
		ex) Swimmer.inheritsFrom(Animal) returns true
	
	
	MixableClass.constructors()
	
		ex) Swimmer.constructors() returns
		[ { name: 'FlyingFish', _constructor: [Function: _constructor] },
	      { name: 'Swimmer', _constructor: [Function: _constructor] },
	      { name: 'Flyer', _constructor: [Function] },
	      { name: 'Animal', _constructor: [Function: _constructor] } ]
	
	MixableClass.mixableMeta()
	
		ex) FlyingFish.getMixableMeta(this) returns 
		
		{ name: 'FlyingFish',
		      constructors:
		       [ { name: 'FlyingFish', _constructor: [Function: _constructor] },
			 { name: 'Swimmer', _constructor: [Function: _constructor] },
			 { name: 'Flyer', _constructor: [Function] },
			 { name: 'Animal', _constructor: [Function: _constructor] } ] 
		}
	
	MixableClass.is() 
	
		ex) FlyingFish.is(Animal) returns true
	
		
	To understand an example in use, check out our test file described below in the "Contriuting" section.
	
	
	
*  Edge Cases


	- edge case ex) extend on the functionality of parent. in java is handeld through "super" call. This package fully 	   replaces this method. There are tricks


 
      

<h1>Contributing</h1>



The main purpose of this repository is to continue to evolve Mixible core, making it faster and easier to use. We are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving Mixible.


* TEST

	- The Test file clearly presents the problem we are trying to solve. Lets say you have a class Swimmer that extends Animal. However, the class FlyingFish is both a Swimmer a Flyer and an Animal. Thus we fall into multiple inheritance problem. 








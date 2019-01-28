<p align="center" >
	<img  src="MixableLogo.jpg" width="100px" height="100px"/>
</p>

<h1 align="center" style=" color: lightblue; font-size: 80px"> Mixable <h1/>

<h3 align= "center">   a <i> multiple inheritance </i> library for js </h3>
<p align="center">
	<img src="logo.jpg" width="222px" height="50px"/>
</p>
<h1>TABLE OF CONTENTS</h1>

<h4>WHY MIXBLE?</h4> 


<h4>GETTING STARTED</h4> 

* SETUP
* USING  

<h4>DETAILS FOR CONTRIUTORS</h4>

* TEST

* HOW IT WORKS

<h1> WHY MIXABLE? </h1>

Mixables is an open source initiative multiple inheritance library.
Which solves the multiple inheritance problem using mixins to move functions.

We want to make it OpenSource because we could not find a better library than ours, and for the chance to grow it and share it with the community.


<h1>GETTING STARTED</h1>

* SETUP  
		How to set up in other peoples projects


* API references 

	Using **createMixableClass()** pass the Class you want as an object through the parameter.
	
	Details about instantiating a MixableClass: 
	- Include classes to inherit simply in an array.
	- constructor defined with underscore '_constructor'
	- the child are called before parent 
	- if both the child and the parent define a method of the same name, then the child will overwrite, and you end up 	   with the child's version.


	Such as this example which comes from the ./examples file in Mixable,
		

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
  
  	The createMixableClass() will automatically create the **multiple inheritance** class.
	Returns a mixable class.
	
	instance.is() => fish.is(Animal) returns true (edited) 
	Class.inheritsFrom()` => Swimmer.inheritsFrom(Animal) returns true
	
	To understand an example in use, check out our test file described below.
	
	
	
*  Edge Cases

//edge case: extend on the functionality of parent.
//in java is handeld through "super" call. This package fully replaces this method. There are ways


 
      

<h1>DETAILS FOR CONTRIUTORS</h1>

* TEST

The Test file clearly presents the problem we are trying to solve. Lets say you have a class Swimmer that extends Animal. However, the class FlyingFish is both a Swimmer a Flyer and an Animal. Thus we fall into multiple inheritance problem. The “Mixables” package solves multiple inheritance with performance and is easy to use.







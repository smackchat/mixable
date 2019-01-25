<img src="fly.png"/>

<h1 style="text-align: center; color: lightblue; font-size: 80px"> Mixable <h1/>

<p style="text-align: center;">   a <i> multiple inheritance </i> library for js </p>

<img src='
https://firebasestorage.googleapis.com/v0/b/startup-debate.appspot.com/o/images%2Fimageedit_5_5067187938.png?alt=media&token=e51207e3-9ec3-4c06-a1b6-f373d32add82
' style="width:150px; height:50px; margin-left: 40%"/>
<p style="text-align: center; font-size: 15px">   Open Source </p>


<h1>TABLE OF CONTENTS</h1>
<hr>

<h4>WHY MIXBLE?</h4> 


<h4>GETTING STARTED</h4> 

* SETUP
* USING  

<h4>DETAILS FOR CONTRIUTORS</h4>
* TEST
* HOW IT WORKS

<h1> WHY MIXABLE? </h1>
<hr>

Mixables is an open source initiative for a multiple inheritance library.
Which solves the multiple inheritance problem using mixins to literally move functions.

We want to make it OpenSource because we could not find a better library than ours, and for the chance to grow it and share it with the community.


<h1>GETTING STARTED</h1>
<hr>

* SETUP  
		How to set up in other peoples projects


* USING 

	Using **createMixableClass()** pass the Class you want as an object in the parameter.
	Include classes to inherit simply in an array. Such as this example

		

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
 
      

<h1>DETAILS FOR CONTRIUTORS</h1>
<hr>
TEST

The Test file clearly presents the problem we are trying to solve. Lets say you have a class Swimmer that extends Animal. However, the class FlyingFish is both a Swimmer a Flyer and¬¬¬ a Animal. Thus we fall into multiple inheritance problem. The “Mixables” package solves multiple inheritance with performance and is easy to use.







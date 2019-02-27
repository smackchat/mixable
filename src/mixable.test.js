import { Animal, Swimmer, Flyer, FlyingFish } from './_examples'

describe('createMixableClass()', () => {

  it(`creates a mixable class. class can instantiate.`, () => {

    expect(Animal.staticThing()).toBe('static return')
    expect(Animal.staticUsingClass()).toBe('static return' + 'added bit')
    expect(Animal.staticProp).toBe('static prop')
    expect(Animal.className()).toBe('Animal')
    expect(Animal.constructors().length).toBe(1)
    expect(Animal.constructors()[0].name).toBe('Animal')

    const animal = new Animal({ name: 'tom' })

    expect(animal).toBeInstanceOf(Animal) 
    expect(animal.exampleProp).toBe('example') // assigned in _constructor
    expect(typeof animal.die).toBe('function')
    expect(animal.is(Animal))
    expect(animal.is(Swimmer)).toBe(false)

    expect(animal.isAlive()).toBe(true)
    animal.die()
    expect(animal.isAlive()).toBe(false)

  })

  it(`a descendant inherits from its parent.`, () => {

    // swimmer -----

    expect(Swimmer.staticThing()).toBe('static return')
    expect(Swimmer.staticProp).toBe('static prop')
    expect(Swimmer.inheritsFrom(Animal)).toBe(true)
    expect(Swimmer.inheritsFrom(Swimmer)).toBe(true)
    expect(Swimmer.inheritsFrom(Flyer)).toBe(false)
    expect(Swimmer.inheritsFrom(FlyingFish)).toBe(false)

    const aquaman = new Swimmer({ name: 'aquaman', maxDepth: 200 })

    expect(aquaman).toBeInstanceOf(Swimmer)
    expect(typeof aquaman.die).toBe('function') // animal method
    expect(typeof aquaman.getCaughtInNet).toBe('function') // swimmer method
    expect(Swimmer.className()).toBe('Swimmer') 
    expect(Swimmer.constructors().length).toBe(2)
    expect(Swimmer.constructors()[0].name).toBe('Swimmer')
    expect(Swimmer.constructors()[1].name).toBe('Animal')
    expect(aquaman.exampleProp).toBe('example') //  assigned in animal _constructor
    expect(aquaman.currentPosition).toBe('surface') //  assigned in swimmer _constructor
    expect(aquaman.is(Swimmer)).toBe(true)
    expect(aquaman.is(Animal)).toBe(true)
    expect(aquaman.is(Flyer)).toBe(false)

    // flyer -----

    expect(Flyer.inheritsFrom(Animal)).toBe(true)
    expect(Flyer.inheritsFrom(Swimmer)).toBe(false)
    expect(Flyer.inheritsFrom(Flyer)).toBe(true)
    expect(Flyer.inheritsFrom(FlyingFish)).toBe(false)

    const polly = new Flyer({ name: 'polly' })

    expect(polly).toBeInstanceOf(Flyer)
    expect(typeof polly.die).toBe('function') // animal method
    expect(typeof polly.crashIntoWindow).toBe('function') // flyer method
    expect(Flyer.className()).toBe('Flyer') 
    expect(Flyer.constructors().length).toBe(2)
    expect(Flyer.constructors()[0].name).toBe('Flyer')
    expect(Flyer.constructors()[1].name).toBe('Animal')
    expect(polly.exampleProp).toBe('example') //  assigned in animal _constructor
    expect(polly.is(Flyer)).toBe(true)
    expect(polly.is(Animal)).toBe(true)
    expect(polly.is(Swimmer)).toBe(false)

  })

  it(`a descendant inherits from all its parents.`, () => { 

    expect(FlyingFish.inheritsFrom(Animal)).toBe(true)
    expect(FlyingFish.inheritsFrom(Swimmer)).toBe(true)
    expect(FlyingFish.inheritsFrom(Flyer)).toBe(true)
    expect(FlyingFish.inheritsFrom(FlyingFish)).toBe(true)

    // const flyingfish = new FlyingFish({ maxDepth: 200 }) // <-- should be ts error: animal constructor params
    // const flyingfish = new FlyingFish({ name: 'fishy the fish' }) // <-- should be ts error: swimmer constructor params
    const flyingfish = new FlyingFish({ name: 'fishy the fish', maxDepth: 200 })

    expect(flyingfish).toBeInstanceOf(FlyingFish)
    expect(typeof flyingfish.die).toBe('function') // this animal method
    expect(typeof flyingfish.getCaughtInNet).toBe('function') // swimmer method
    expect(typeof flyingfish.crashIntoWindow).toBe('function') // flyer method
    expect(typeof flyingfish.avoidPredator).toBe('function') // flyingfish method
    expect(FlyingFish.className()).toBe('FlyingFish') 
    expect(FlyingFish.constructors().length).toBe(4)
    expect(FlyingFish.constructors()[0].name === 'Animal')
    expect(FlyingFish.constructors()[1].name === 'Swimmer')
    expect(FlyingFish.constructors()[2].name === 'Flyer')
    expect(FlyingFish.constructors()[3].name === 'FlyingFish')
    expect(flyingfish.exampleProp).toBe('example') //  assigned in animal _constructor
    expect(flyingfish.currentPosition).toBe('surface') //  assigned in swimmer _constructor
    // Animal.die() called in flyingfish _constructor, 
    //  but the base constructors get called last, 
    //  and Animal sets alive to true
    expect(flyingfish.isAlive()).toBe(true)
    expect(flyingfish.is(FlyingFish)).toBe(true)
    expect(flyingfish.is(Animal)).toBe(true)
    expect(flyingfish.is(Swimmer)).toBe(true)
    expect(flyingfish.is(Flyer)).toBe(true)

  })

})
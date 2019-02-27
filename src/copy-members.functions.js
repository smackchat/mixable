
const staticPropsToIgnore = [
  
  // js stuff
  'name', 'prototype', 'arguments',
  'caller', 'callee', 'length',

  // our stuff
  '__mixable_meta'

]

const prototypePropsToIgnore = [

  // js stuff
  'constructor',

]

// ---- 

export const copyMembers = ({
  source /* MixableClass */,
  dest /* MixableClass */,
}) => {
  copyStaticMembers({ source, dest })
  copyInstanceMembers({ source, dest })
}

// ----

export const copyStaticMembers = ({
 source /* MixableClass */,
 dest /* MixableClass */,
}) =>
 giveProps({
   dest,
   source,
   ignore: staticPropsToIgnore
 })

// ----

export const copyInstanceMembers = ({
 source /* MixableClass */,
 dest /* MixableClass */,
}) =>
 giveProps({
   source: source.prototype,
   dest: dest.prototype,
   ignore: prototypePropsToIgnore
 })

// ----

export const giveProps = ({
  source /* Object */,
  dest /* Object */,
  ignore /* Array<string> */,
}) =>
  Object.getOwnPropertyNames(source)
    .filter(n => !ignore.includes(n))
    .forEach(n => dest[n] = source[n])

// ----

export const deleteProps = ({
  from /* Object */,
  remove /* Object */,
  ignore /* Array<string> */,
}) =>
  Object.getOwnPropertyNames(remove)
    .filter(n => !ignore.includes(n))
    .forEach(n => delete from[n])
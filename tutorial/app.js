// const amount = 12

// if (amount < 10) {
//   console.log('small number')
// } else {
//   console.log('large number')
// }

// console.log(`hey it's my first node app!!!`)

//Modules
const names = require('./module')
// lub
// const { maciej, maciek } = require('./module')
const sayHi = require('./utile')

console.log(names)

sayHi('Maciej')
sayHi(names.maciej)
sayHi(names.maciek)
//lub
// sayHi(maciej)
// sayHi(maciek)

// const amount = 12

// if (amount < 10) {
//   console.log('small number')
// } else {
//   console.log('large number')
// }

// console.log(`hey it's my first node app!!!`)

//Modules
// const names = require('./module')
// lub
// const { maciej, maciek } = require('./module')
// const sayHi = require('./utile')
// const data = require('./alternative')
// require('./mind-granade')
// console.log(data)

// sayHi('Maciej')
// sayHi(names.maciej)
// sayHi(names.maciek)
//lub
// sayHi(maciej)
// sayHi(maciek)

// OS Modules

const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  realse: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)

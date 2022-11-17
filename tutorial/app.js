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

// const os = require('os')

// //info about current user
// const user = os.userInfo()
// console.log(user)

// //method returns the system uptime in seconds
// console.log(`The system Uptime is ${os.uptime()} seconds`)

// const currentOS = {
//   name: os.type(),
//   realse: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// }

// console.log(currentOS)

// PATH Modules
// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute)

// const http = require('http')

// const server = http.createServer((req, res) => {
//   // console.log(req)
//   if (req.url === '/') {
//     res.end('Welcome to our home page')
//     return
//   }
//   if (req.url === '/about') {
//     res.end('Here us history')
//     return
//   }
//   res.end(`<h1>Oops!</h1>
//   <p>we cant to find the page</p>
//   <a href="/">back home</a>`)
// })

// server.listen(5000)

// HTTP

// const _ = require('lodash')

// const items = [1, [2, [3, [4, [5]]]]]

// const newItems = _.flattenDeep(items)
// console.log(newItems)

// ------------ Event loop -----------

// const { readFile } = require('fs')
// console.log('start a first task')

// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(result)
//   console.log('completed first task')
// })
// console.log('start next task')

// start
// console.log('first')
// setInterval(() => {
//   console.log('second')
// }, 1000)
// console.log('third')
// // end
// // start
// console.log('first')
// setTimeout(() => {
//   console.log('second')
// }, 0)
// console.log('third')
// // end

// const http = require('http')

// const server = http.createServer((req, res) => {})
// server.listen(5000, () => {
//   console.log('Server listen on porst: 5000')
// })

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`data recived ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
  console.log(`some other logic here`)
})

customEmitter.emit('response', 'john', 34)

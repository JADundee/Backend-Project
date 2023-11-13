const fs = require('fs')


fs.readFile('./hello.txt', (err, data) => {
    console.time('challenge')
    if(err) {
        throw (err)
    }
    console.log('async', data.toString())
    console.timeEnd('challenge')
})

const file = fs.readFileSync('./hello.txt')
console.log('sync', file.toString())


//APPEND
/* fs.appendFile('./hello.txt', '!', err => {
    if (err) {
        console.log(err)
    }
}) */

//WRITE
/* fs.writeFile('bye.txt', 'papa', err => {
    if (err) {
        console.log(err)
    }
}) */

//DELETE
/* fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err)
    }
}) */
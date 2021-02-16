const fs = require('fs');

console.log(fs.readdirSync('./example'))

fs.readFile('index.txt', 'utf8', (err, data) => {
    console.log(data)
})

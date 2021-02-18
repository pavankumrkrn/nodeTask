const fs = require('fs');

let arr = fs.readdirSync('./example');
arr.forEach(i => {
    let f = fs.statSync("./example/" + i)
    console.log(f.isFile())
})

fs.readFile('index.txt', 'utf8', (err, data) => {
    console.log(data)
})

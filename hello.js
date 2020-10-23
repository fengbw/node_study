var http = require('http')

http.createServer(function (request, response) {
    response.writeHead(200, {'Context-Type': 'text/plain'})

    response.end('Hello world')
}).listen(8888, () => {
    console.log('runnning...')
})
// console.log(exports === module.exports)
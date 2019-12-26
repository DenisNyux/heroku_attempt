const http = require('http');


http
    .Server((req, res) => res.end('Hello'))
    .listen(9999, ()=> console.log(process.pid));

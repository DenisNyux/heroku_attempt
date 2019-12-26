require('http')
    .Server((req, res) => res.end('Hello'))
    .listen(4312);

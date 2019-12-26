require('http')
    .Server((req, res) => {
        if (req.url === '/'){
            res.end('Hello')}
    })
    .listen(4312);

const PORT = 4312;

require('http')
    .Server((req, res) => {
        if (req.url === '/'){
            res.end('Hello')}
    })
    .listen(process.env.PORT || PORT, () => console.log(process.pid));

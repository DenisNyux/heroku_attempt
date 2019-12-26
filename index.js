const [{ Server: h1 }, x] = [require('http'), require('express')];

const Router = x.Router();
const PORT = 4321;
const { log } = console;
const hu = { 'Content-Type': 'text/html; charset=utf-8' };
const app = x();
Router
    .route('/')
    .get(r => r.res.end('Привет мир!'));
app
    .use((r, rs, n) => rs.status(200).set(hu) && n())
    .use(x.static('.'))
    .use('/', Router)
    .get('/add',(req,res)=>{
        let result;
        const n1 = Number(req.query.n1);
        const n2 = Number(req.query.n2);

        if (Object.is(n1,NaN) ||Object.is(n2,NaN)) {
            result = 'Введите числа, пожалуйста!';
        } else {
            const s = n1+n2;
            result = 'Результат: ' + s;
        };

        res.send(result);
        //чтобы отправить это в json. нужно убрать 12 сторку и писать похожую перед каждой посылкой(таким образом мы определяем заголовки)
    })
    .use(({ res: r }) => r.status(404).end('Пока нет!'))
    .use((e, r, rs, n) => rs.status(500).end(`Ошибка: ${e}`))
    /* .set('view engine', 'pug') */
    .set('x-powered-by', false);
module.exports = h1(app)
    .listen(process.env.PORT || PORT, () => log(process.pid));

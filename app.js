const Koa = require('koa')
const config = require('./config')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const testRouter = require('./router/api/test')

const app = new Koa()
mongoose.connect(config.db, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.error('失败')
    } else {
        console.log('成功')
    }
});
app.use(cors())
app.use(bodyParser())
app.use(testRouter.routes()).use(testRouter.allowedMethods())


app.listen('9001')
const Router = require('koa-router')
const testControll = require('../../controllers/test')
const router = new Router()

router.get('/test', testControll.getTest)
module.exports = router
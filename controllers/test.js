const testCol = require('../models/test')

const getTest = async (ctx, next) => {
    const data = await testCol.find()
    ctx.status = 200
    ctx.body = {
        code: 0,
        data: data
    }
}

module.exports = {
    getTest
}
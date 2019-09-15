const mongoose = require('mongoose')

const Schema = mongoose.Schema
let Test = new Schema({
    name: String,
    id: Number,
    msg: String
}, { collection: 'userInfo', versionKey: false})
// const Items = mongoose.model("user", User)
// Items.find().then((result)=>{
//     console.log('result-router', result)
// })
module.exports = mongoose.model("test", Test)
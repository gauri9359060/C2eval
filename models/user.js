const mongoose = require('mongoose')

const user = mongoose.Schema({
    "firstName" :{type:String, required:true},
    "middleName" :{type:String},
    "lastName" : {type:String, required:true},
    "age" :{type:Number, required:true},
    "email" :{type:String, required:true},
    "address" :{type:String, required:true},
    "gender" : {type:String, default:"Female"}
})

module.exports = mongoose.model('user',user)
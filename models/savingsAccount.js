const mongoose = require('mongoose')

const savingsAccount = mongoose.Schema({
    "account_number" :{type:Number, required:true},
    "balance" :{type:Number, required:true},
    "interest_rate" : {type:Number, required:true},
    "created_at": { type: Date, required: true, default: Date.now },
    "updatedAt": new Date()
})

module.exports = mongoose.model('savingsAccount',savingsAccount)
const mongoose = require('mongoose')

const masterAccount = mongoose.Schema({
    "balance" :{type:Number, required:true},
    "created_at": { type: Date, required: true, default: Date.now },
    "updatedAt": new Date()
})

module.exports = mongoose.model('masterAccount',masterAccount)
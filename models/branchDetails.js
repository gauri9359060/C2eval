const mongoose = require('mongoose')

const branchDetails = mongoose.Schema({
    "name" :{type:String, required:true},
    "address" :{type:String, required:true},
    "IFSC" : {type:String, required:true},
    "MICR" :{type:Number, required:true},
    "created_at": { type: Date, required: true, default: Date.now },
    "updatedAt": new Date()
})

module.exports = mongoose.model('branchDetails',branchDetails)
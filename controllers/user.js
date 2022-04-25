const userModel = require("../models/user")

async function getAllUsers(req,res,next){
    try{
        let response = await userModel.find({}).populate('balane', {balance : 1})
    }
    catch{
        res.status(500).json(error)
    }
}

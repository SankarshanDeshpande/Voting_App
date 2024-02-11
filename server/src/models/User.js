const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    aadhar: {type : Number,unique:true},
    password: {type : String},
    votednumber: {type: Number},
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
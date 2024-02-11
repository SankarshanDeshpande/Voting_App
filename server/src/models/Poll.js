const mongoose = require('mongoose')

const PollSchema = new mongoose.Schema({
    title: {type : String},
    topic: {type : String},
    optionOne: {type : String},
    optionTwo: {type : String},
    optionThree: {type : String},
    optionFour: {type : String},
    optionFive: {type : String},
    optionSix: {type : String},
    voteOne: {type : Number},
    voteTwo: {type : Number},
    voteThree: {type : Number},
    voteFour: {type : Number},
    voteFive: {type : Number},
    voteSix: {type : Number},
    total: {type : Number},
    voted: {type : Array},
})

const PollModel = mongoose.model("polls", PollSchema)
module.exports = PollModel
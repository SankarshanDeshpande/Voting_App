const dotenv = require('dotenv')
dotenv.config()
const express = require("express")
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./src/models/User')
const PollModel = require("./src/models/Poll");
const PORT = process.env.PORT || 5000;

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.PASS}@cluster0.s6urhss.mongodb.net/?retryWrites=true&w=majority`)

var currentUser = ""
var currentUserId = ""

app.post('/login', async (req,res) => {
  
  const {aadhar, password} = req.body;

  try{
    const user = await UserModel.findOne({aadhar});
  
    if(user) {
      if(aadhar === process.env.AADHAR){
        res.json("Developer")
        currentUser = "Developer"
        currentUserId = process.env.AADHAR
      }
      else{
      const passwordMatch = await bcrypt.compare(password, user.password)
      if (passwordMatch){
        res.json("Success")
        currentUser = "Success"
        currentUserId = user.aadhar
      }else{
        res.json("The password is incorrect")
      }}
    }else{
      res.json("User does not exist")
    }
  }catch(err){
    res.json(err);
  }

})

app.post('/registerValidate', (req, res) => {
  const {aadhar,password} = req.body;
  if(!(aadhar.match('[2-9]{1}[0-9]{11}'))){
    res.json("Please provide valid aadhaar number")
  } else {
    UserModel.findOne({aadhar: aadhar})
    .then(user => {
      if(user) {
        res.json("User already exists")
      } else {
        res.json("Register")
      }
    })
  }
})

app.post('/register', async (req, res) => {
  const {aadhar, password, votednumber} = req.body;
  const hashpassword = await bcrypt.hash(password,10)
  const user = new UserModel({
    aadhar: aadhar,
    password: hashpassword,
    votednumber: votednumber,
  });
  user
    .save(user)
    .then(
      UserModel.create(user)
      .then(users => res.json(users))
      .catch(err => res.json(err))
    )
})

app.post('/poll', (req, res) => {
  PollModel.create(req.body)
  .then(polls => res.json(polls))
  .catch(err => res.json(err))
})

app.get('/getPolls', (req, res) => {
  PollModel.find()
  .then(polls => res.json(polls))
  .catch(err => res.json(err))
})

app.get('/getCurrentUser', (req, res) => {
  res.json(currentUser)
})

app.get('/logout', (req, res) => {
  currentUserId = ""
  res.json(currentUserId)
})

app.get('/getCurrentUserId', (req, res) => {
  res.json(currentUserId)
})

app.put('/updateOne', (req, res) => {
  const {id, userid} = req.body
  PollModel.findOneAndUpdate({"_id":id}, {$inc : {"voteOne" : 1, "total" : 1}, $addToSet: {"voted": userid}})
  .then(polls => res.json(polls))
  .catch(err => res.json(err))
})

app.put('/updateTwo', (req, res) => {
  const {id, userid} = req.body
  PollModel.findOneAndUpdate({"_id":id}, {$inc : {"voteTwo" : 1, "total" : 1}, $addToSet: {"voted": userid}})
  .then(polls => res.json(polls))
  .catch(err => res.json(err))
})

app.put('/updateThree', (req, res) => {
  const {id, userid} = req.body
  PollModel.findOneAndUpdate({"_id":id}, {$inc : {"voteThree" : 1, "total" : 1}, $addToSet: {"voted": userid}})
  .then(polls => res.json(polls))
  .catch(err => res.json(err))
})

app.put('/updateFour', (req, res) => {
  const {id, userid} = req.body
  PollModel.findOneAndUpdate({"_id":id}, {$inc : {"voteFour" : 1, "total" : 1}, $addToSet: {"voted": userid}})
  .then(polls => res.json(polls))
  .catch(err => res.json(err))
})

app.put('/updateFive', (req, res) => {
  const {id, userid} = req.body
  PollModel.findOneAndUpdate({"_id":id}, {$inc : {"voteFive" : 1, "total" : 1}, $addToSet: {"voted": userid}})
  .then(polls => res.json(polls))
  .catch(err => res.json(err))
})

app.put('/updateSix', (req, res) => {
  const {id, userid} = req.body
  PollModel.findOneAndUpdate({"_id":id}, {$inc : {"voteSix" : 1, "total" : 1}, $addToSet: {"voted": userid}})
  .then(polls => res.json(polls))
  .catch(err => res.json(err))
})

app.put('/updateVotednumber', (req, res) => {
  const {userid} = req.body
  UserModel.findOneAndUpdate({"aadhar":userid}, {$inc : {"votednumber" : 1}})
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

app.get('/totalPolls', (req, res) => {
  PollModel.count()
  .then(totalPoll => res.json(totalPoll))
  .catch(err => res.json(err))
})

app.get('/totalPolls', (req, res) => {
  PollModel.count()
  .then(totalPoll => res.json(totalPoll))
  .catch(err => res.json(err))
})

app.post('/totalVotednumber', async (req, res) => {
  const {userid} = req.body;
  const user = await UserModel.findOne({aadhar : userid});
  res.json(user)
})

app.listen(PORT, () => {
  console.log("server is running")
})
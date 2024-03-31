
const express = require('express')
var mongo=require('mongodb')
var studentdb = require('./newdatabase')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors())

// app.get('/', (req, res) => {
//   res.json('Hello react and node')
// })

app.post('/register', (req, res) => {
  let data = {
    fname: req.body.fname,
    lname: req.body.lname
  }
  studentdb.then((dbase) => {
    dbase.collection('studentname').insertOne(data).then((result) => {
      console.log(result)
    })
  })
})


app.get('/viewform',(req,res)=>{
  studentdb.then((db)=>{
    db.collection('studentname').find().toArray().then((result)=>{
      console.log(result);
      res.json(result)
    })
  })
})

app.post('/delete',(req,res)=>{
  let delId=req.body.id
  studentdb.then((db)=>{
    db.collection('studentname').deleteOne({_id:new mongo.ObjectId(delId)}).then((result)=>{
     console.log(delId);
      console.log('delete');
    })
  })
})

app.post('/edit', (req, res) => {
  let editId=req.body.id
  let editData = {
    fname: req.body.fnames,
    lname: req.body.lnames
  }
  studentdb.then((dbase) => {
    dbase.collection('studentname').updateOne ({ _id: new mongo.ObjectId(editId) }, 
    { $set: editData }).then((result) => {
      console.log(result)
    })
  })
})
app.listen(5000)

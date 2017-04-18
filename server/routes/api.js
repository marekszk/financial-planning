const express = require('express');
const router = express.Router();

var MongoClient = require('mongodb').MongoClient
var mongoose = require('mongoose');
var User = require('../model/user.js');

mongoose.connect('mongodb://localhost:27017/test');

var chris = new User({
  name: 'jotrfsderhn',
  username: '12fsdter3',
  password: '12tfsder3' 
});

router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
// router.get('/posts', (req, res) => {
  

//   chris.save(function(err) {
//     // if (err) throw err;

//     console.log(chris);
//   }).then(posts => {
//       res.status(200).json(posts.data);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     });

//     return res;
// });

router.get("/users", (req, res)=>{
  User.find({}, function(err, users) {
    if (err) throw err;
    let result = users.map(elem=>{
      return elem.name;
    });
    res.status(200).json(result);
    // object of all the users
  });
  return res;
});

module.exports = router;
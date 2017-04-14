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
chris.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  

  chris.save(function(err) {
    // if (err) throw err;

    console.log(chris);
  }).then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });

    return res;
});

module.exports = router;
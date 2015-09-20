var express = require('express');
var router = express.Router();
var Student = require('../models/student.js');


// ** GET ALL students ** //
router.get('/students', function (req, res, next) {
    Student.findQ()
        .then(function(result){ers.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});

// ** GET ONE student ** //


// ** POST ALL students** //
router.post('/students', function (req, res, next) {
      new Student({
        name: req.body.name,
        age: req.body.age,
        graduate: req.body.graduate
    })
.saveQ()
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// ** PUT ONE student ** //


// ** DELETE ONE student ** //


module.exports = router;
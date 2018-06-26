var express = require('express')
var router = express.Router();

var User = require('../model/users')
var bodyParser = require('body-parser')

// 9. /api/users 
// : Return all users
router.get('/users', function (req, res, next) {
    User.find(function (err, docs) {
        if (err) res.json({ msg: 'something went wrong' })
        else {
            res.json(docs);
        }
    })
})
// 10. /api/users/login : Return user Object  
// Response : true / false
//users login
router.post('/users/login', function (req, res, next) {
    User.find({ username: req.body.username, password: req.body.password }, function (err, docs) {
        if (err) {
            res.json({ msg: 'error in finding user' })
        }
        else {
            if (docs.length == 1)
                res.json({ msg: "Login successful" })
            else
                res.json({ msg: 'Login Failed' })
        }
    })
})

// 11. /api/users/signup 
// Response : User object with amessage
// Error:
//users signup 
router.post('/users/signup', function (req, res, next) {
    var newUser = new User(req.body)
    newUser.save((err, docs) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(docs)
        }
    })
})

module.exports = router;
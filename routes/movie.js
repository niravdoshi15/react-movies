var express = require('express')
var router = express.Router();

var Movie = require('../model/movies')
var bodyParser = require('body-parser')
//1./api/movies : list of all movies using GET
router.get('/movies', function (req, res) {

    Movie.find(function (err, docs) {
        if (err) res.json(err)
        else {
            res.json(docs)
        }
    })
})
//2. /api/movies/:id 
// Resp : Movie Object
// Returns single object with specified ID 
router.get('/movies/:id', function (req, res) {

    Movie.findById(req.params.id, function (err, docs) {
        if (err) res.json(err)
        else {
            res.json(docs)
        }
    })
})


//3./api/movies: Add a new movie
//:-  Request body : Movie Object
//:-  Response:  movie object with success message

router.post('/movies', function (req, res, next) {
    var newMovie = new Movie(req.body)
    newMovie.save((err, task) => {
        if (err) res.json(err);
        else {
            res.json(task);
        }
    })

})

//4. /api/movies/:id : Update existing movie object with ID
// :- Request Body : Movie object
//:-  Response :movie object with success message
//       : Error :Message as an object
router.put('/movies/:id', function (req, res, next) {
    Movie.findByIdAndUpdate(req.params.id, { title: req.body.title }, function (err, doc) {
        if (err) { res.json(err); }
        else {
            res.json(doc);
        }
    })
})


//5. /api/movies/:id :Delete the movie
// :- Response : movie object with success message 
// : Error message with error object

router.delete('/movies/:id', function (req, res) {
    Movie.findByIdAndRemove(req.params.id, function (err, doc) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(doc)
        }
    })
})

// 6. /api/movies/:id/comments :Return list of comments and ratings for a movie specified by ID
// Response : Return the list of reviews for the movie
// : error message

router.get('/movies/:id/comments', function (req, res, next) {
    Movie.findById(req.params.id, { "reviews.rating": 1, "reviews.comments": 1 }, function (err, doc) {
        if (err) res.json(err)
        else {
            res.json(doc)
        }
    })
})

// 7. /api/movies/top/:count 
// Response:- Returns the list of top n movies with highest rating
router.get('/movies/top/:count', function (req, res) {

    Movie.aggregate([{ $unwind: "$reviews" }, { $group: { _id: "$title", AvgRating: { $avg: "$reviews.rating" } } },
    { $sort: { "AvgRating": 1 } }, { $limit: parseInt(req.params.count) }], function (err, docs) {
        if (err) res.json(err)
        else {
            res.json(docs)
        }
    })
})


// 8. /api/movies/:id/comments : use to add new comment /Reviews
// success: update the movies object by adding a new comment info. 
router.put('/movies/:id/comments', function (req, res, next) {

    Movie.findOneAndUpdate({ _id: req.params.id, 'reviews.reviewer_name': req.body.reviewer_name }, { $set: { 'reviews.$.comments': req.body.comments } }, function (err, docs) {
        if (err) res.json(err)
        else if (docs) {
            res.json({ msg: 'comment added', docs });
        }
        else {
            res.json({ msg: "no reviewer present" + req.body.reviewer_name })
        }


    })

})
module.exports = router;
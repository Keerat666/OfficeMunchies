var express = require('express');
var router = express.Router();
const FoodModel = require('../models/food_items')


var users = require('../controllers/users')

var crud = require('../middlewares/crud')

router.get('/test', function(req, res) {
    res.send('Food Route is Up and Running.');
});

router.get('/allFoods', function(req, res) {
    crud.getAllEntriesv2(req, res, FoodModel)
});

router.get('/FoodByID', function(req, res) {
    crud.getEntryByID(req, res, FoodModel)
});

router.post('/saveFood', function(req, res) {
    crud.createEntry(req, res, FoodModel)
});

router.put('/editFood', function(req, res) {
    crud.updateEntryByID(req, res, FoodModel);
});

router.delete('/deleteFood', function(req, res) {
    crud.deleteEntryByID(req, res, FoodModel);
});

module.exports = router;
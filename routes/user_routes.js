var express = require('express');
var router = express.Router();
const UserModel = require('../models/users')
var users = require('../controllers/users')

var crud = require('../middlewares/crud')

router.get('/test', function(req, res) {
    res.send('User Route is Up and Running.');
});

router.get('/allUsers', function(req, res) {
    crud.getAllEntries(req, res, UserModel)
});

router.get('/UserByID', function(req, res) {
    crud.getEntryByID(req, res, UserModel)
});

router.post('/saveUser', function(req, res) {
    crud.createEntry(req, res, UserModel)
});

router.put('/editUser', function(req, res) {
    crud.updateEntryByID(req, res, UserModel);
});

router.delete('/deleteUser', function(req, res) {
    crud.deleteEntryByID(req, res, UserModel);
});

module.exports = router;
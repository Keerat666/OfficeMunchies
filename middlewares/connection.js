var mongoose = require('mongoose');

//Set up default mongoose connection
// var mongoDB = 'mongodb://localhost/soaps';
// mongoose.connect(mongoDB, { useNewUrlParser: true });
//Cloud Atlas : mongodb+srv://admin:PLgTOTRSbaapogZn@ascential.biggr.mongodb.net/Ascential_Dev?retryWrites=true&w=majority
var conn = mongoose.connect('mongodb://admin:zllmBrsTuhgmhMa0@ascentialdb-shard-00-00.biggr.mongodb.net:27017,ascentialdb-shard-00-01.biggr.mongodb.net:27017,ascentialdb-shard-00-02.biggr.mongodb.net:27017/heroku_19h1zvk6?ssl=true&replicaSet=atlas-vntias-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useFindAndModify: false })
    .then((db) => {
        console.log('Database connected');

        return db
    })
    .catch((error) => {
        console.log('Error connecting to database' + error);
    });

module.exports = conn
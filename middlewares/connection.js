var mongoose = require('mongoose');

//Set up default mongoose connection
// var mongoDB = 'mongodb://localhost/soaps';
// mongoose.connect(mongoDB, { useNewUrlParser: true });
//Cloud Atlas : mongodb+srv://admin:PLgTOTRSbaapogZn@ascential.biggr.mongodb.net/Ascential_Dev?retryWrites=true&w=majority
var conn = mongoose.connect('db connection string in here', { useNewUrlParser: true, useFindAndModify: false })
    .then((db) => {
        console.log('Database connected');

        return db
    })
    .catch((error) => {
        console.log('Error connecting to database' + error);
    });

module.exports = conn

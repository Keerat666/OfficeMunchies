const express = require('express');
var cors = require('cors')
const app = express();
const PORT = 8000;
var usersRouter = require('./routes/user_routes');
var foodRouter = require('./routes/food_router');

var swaggerUi = require('swagger-ui-express')
var swaggerDocument = require('./swagger.json');


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connecting to db
var connection = require('./middlewares/connection').then(db => {

    console.log("Connection Success")

    //initializing admin bro
    var adminBroRouter = require('./routes/admin_bro');
    //setting up admin bro
    app.use('/admin', adminBroRouter)
    app.listen(8080, () => {

        console.log('AdminBro is under localhost:8080/admin')

    })

})







//setting up swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

console.log("Swagger running at port 8000 at /api-docs")
    //setting up route for user related API's
app.use('/api/v1/users', usersRouter);

app.use('/api/v1/food_items', foodRouter);


app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
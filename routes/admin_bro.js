const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const UserModel = require('../models/users')
const FoodModel = require('../models/food_items')
const OrderModel = require('../models/orders')

AdminBro.registerAdapter(AdminBroMongoose)

const AdminBroOptions = {
    resources: [UserModel, FoodModel, OrderModel],
}

console.log("Inside admin bro")

const AdminBroObj = new AdminBro(AdminBroOptions)

const router = AdminBroExpress.buildRouter(AdminBroObj)

module.exports = router;
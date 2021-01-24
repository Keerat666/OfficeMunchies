//Require Mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    order: {
        type: [{
                item_name: { type: String, description: "Required Field", required: true },
                item_created_at: { type: Date, default: Date.now() },
                item_availability: { type: String, enum: ['True', 'False'] },
                item_description: { type: String, required: true, description: "Should be unique" },
                item_price: { type: Number },
                main_image: { type: String, required: true },
                cartStatus: { type: String, required: true },
                quantity: { type: String, required: true },

            }

        ]
    },
    order_created_at: { type: Date, default: Date.now() },
    total: { type: Number },
    date: { type: JSON, required: true },
    time: { type: String, required: true },
    userID: { type: String, required: true },
    userEmail: { type: String },

    payment_mode: { type: String },


}, { collection: 'orders' });
var OrderModel = mongoose.model('orders', orderSchema);

module.exports = OrderModel;

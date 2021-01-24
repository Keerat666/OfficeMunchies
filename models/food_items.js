//Require Mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var foodSchema = new Schema({
    item_name: { type: String, description: "Required Field", required: true },
    item_created_at: { type: Date, default: Date.now() },
    item_availability: { type: String, enum: ['True', 'False'] },
    item_description: { type: String, required: true },
    item_price: { type: Number },
    main_image: { type: String, required: true },
    gallery_images: {
        type: [{
                "image_link": { type: String }
            }

        ],
        default: {}
    },

}, { collection: 'food_items' });
var UserModel = mongoose.model('food_items', foodSchema);

module.exports = UserModel;

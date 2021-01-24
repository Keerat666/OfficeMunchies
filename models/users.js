//Require Mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    full_name: { type: String, description: "Required Field", required: true },
    id_created_at: { type: Date, default: Date.now() },
    gender: { type: String, enum: ['Male', 'Female', 'Others'] },
    phone_no: { type: String, unique: true, required: true, description: "Should be unique" },
    email: { type: String, unique: true, required: true, description: "Should be unique" },
    password: { type: String, required: true, description: "Should be unique" },
    wallet: { type: Number, default: 100 },
    emp_no: { type: String, required: true },
    profile_picture: { type: String, default: "https://res.cloudinary.com/dwckgkzdz/image/upload/v1604757274/buddha_wyz1ek.jpg" },
    office_id: { type: String, required: true },
    organization_name: { type: String, default: "HackerEarth" },

}, { collection: 'users_OM' });
var UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;
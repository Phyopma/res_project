const mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
    },
    address: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    menu: [{
        food: String,
        price: String,
        photo: String

    }],
});

module.exports = mongoose.model('Restaurant', restaurantSchema, 'restaurants');
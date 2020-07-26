const express = require('express');
const restaurantRouter = express.Router();
const Restaurant = require('../models/Restaurant');

restaurantRouter.get('/', async (req, res) => {
    const restaurant = await Restaurant.find();
    res.json(restaurant)
})

restaurantRouter.post('/', async (req, res) => {
    const restaurant = new Restaurant(req.body);
    try {
        const new_restaurant = await restaurant.save();
        res.json(new_restaurant)
    } catch (error) {
        res.json({ msg: error })
    }
})

module.exports = restaurantRouter
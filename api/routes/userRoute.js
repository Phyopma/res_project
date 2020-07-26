const express = require('express');
const userRouter = express.Router();
const User = require('../models/User')

userRouter.get('/', async (req, res) => {
    const users = await User.find()
    res.json(users)
})

userRouter.post('/', async (req, res) => {
    const user = new User(req.body)
    try {
        const newuser = await user.save();
        res.json(newuser)
    } catch (error) {
        res.json({ msg: error })
    }
})

module.exports = userRouter
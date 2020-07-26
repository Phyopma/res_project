const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRouter = require('./routes/userRoute')
const restaurantRouter = require('./routes/restaurantRoute')
const bodyParser = require('body-parser')

dotenv.config({ path: './config/.env' })

connectDB();
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', userRouter)
app.use('/restaurant', restaurantRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`)
})
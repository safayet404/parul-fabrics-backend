const express = require('express');
const connectDB = require('./config/connectDB');
const mongoose = require("mongoose")
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;


const authRouter = require('./routes/authRoutes');
const productRouter = require('./routes/productRoute');
const receiveRouter = require('./routes/receiveRoutes');

const factoryRouter = require("./routes/finishingFactoryRoutes")
const expenseRouter = require("./routes/expenseRoutes")
const colorRouter = require("./routes/colorRoute")
const customerRouter = require("./routes/customerRoutes")
const balanceRouter = require("./routes/balanceRoutes")
const sellRouter = require("./routes/sellRoutes")
const dashboardUser = require("./routes/dashboardUserRoutes")
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const cors = require('cors')
//f2ezqNAzbvIqbic7
connectDB()
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use('/api/user',authRouter)

app.use('/api/product',productRouter)
app.use('/api/balance',balanceRouter)
app.use('/api/factory',factoryRouter)
app.use('/api/customer', customerRouter)
app.use('/api/expense',expenseRouter)
app.use('/api/sell',sellRouter)
app.use('/api/color',colorRouter)
app.use('/api/receive',receiveRouter)
app.use('/api/dashboardUser',dashboardUser)

app.use(cookieParser())
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, ()=>{{
    console.log(`Server is running at PORT `)

}})
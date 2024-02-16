const { default: mongoose } = require("mongoose")
const dotenv = require('dotenv').config()
const NAME = process.env.NAME
const PASS = process.env.PASSWORD
console.log(NAME);


const connectDB = async ()=>{
    await mongoose.connect(`mongodb+srv://${NAME}:${PASS}@parul-fabrics.1nu48yt.mongodb.net/parul-fabrics`)
    console.log(`the db is connect with ${mongoose.connection.host}`);
}

module.exports = connectDB


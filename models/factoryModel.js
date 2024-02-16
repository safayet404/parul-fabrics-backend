const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var factorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
       
    },
    address:{
        type:String,
        required:true,
       
    },
 
},{timestamps : true});

//Export the model
module.exports = mongoose.model('Factory', factorySchema);
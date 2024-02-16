const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
       
    },
    email:{
        type:String,
       
      
    },
    mobile:{
        type:String,
        required:true,
     
    },
    address:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Customer', customerSchema);
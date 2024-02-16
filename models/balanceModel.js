const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var balanceSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true,
    },
    description:{
        type:String,
        required:true,
        
    },
    amount:{
        type:Number,
        required:true,
        
    },
});

//Export the model
module.exports = mongoose.model('Balance', balanceSchema);
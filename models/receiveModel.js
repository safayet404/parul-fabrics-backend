const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var receiveSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
      },
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
module.exports = mongoose.model('Receive', receiveSchema);
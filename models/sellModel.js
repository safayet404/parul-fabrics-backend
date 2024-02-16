const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var sellSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },

  name: {
    type: String,
    
  },
  description: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date:{
    type:Date,
    required:true,
},
  totalPrice: {
    type: Number,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Sell", sellSchema);

const mongoose = require('mongoose'); // Erase if already required
let Schema = mongoose.Schema;
// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        
    },
    color:{
        type:String,
        required:true,
        
    },
    quantity :{
        type : Number,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
},{timestamps : true});

//Export the model
module.exports = mongoose.model('Product', productSchema);
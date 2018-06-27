const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Product = new Schema({
    title: String,
    description: String,
    price: Number
});



module.exports = mongoose.model('Product', Product);

const mongoose = require('mongoose');

var perfumeSchema = new mongoose.Schema({
    section: String,
    brand: String,
    name: String,
    size: String,
    price: Number
},
{ timestamps: true }
);

module.exports = mongoose.model('Perfume', perfumeSchema);
const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true 
    },
    image: {
        type: String,
        required: true 
    },
    cdt: {
        type: String,
        default: Date.now 
    }
}, {timestamps: true})

const Product = mongoose.model('Product', productSchema)

module.exports = Product 
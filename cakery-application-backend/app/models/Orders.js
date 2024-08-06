const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
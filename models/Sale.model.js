const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    client: {
        type: mongoose.ObjectId,
        ref: 'Client',
    },
    date: {
        type: Date,
        required: true,
    },
    purchase: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true,
    }
});

mongoose.model('Sale', SaleSchema, 'collectionSale');
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
        type: [
            {
                name: {
                    type: String
                },
                price: {
                    type: Number
                },
                tax: {
                    type: Number
                },
                total: {
                    type: Number
                },
            }
        ],
        required: true,
    },
});

mongoose.model('Sale', SaleSchema, 'collectionSale');
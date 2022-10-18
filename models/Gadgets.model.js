const mongoose = require('mongoose');

const GadgetsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    features: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    costPrice: {
        type: Number,
        required: true,
    },
    itemImage: {
        type: String,
    },
});

mongoose.model('Gadgets', GadgetsSchema, 'collectionGadgets');
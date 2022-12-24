const { Schema, model } = require('mongoose');
// Schema
const productSchema = new Schema({
    title: {
        type: String,
        required: [true, 'product title is required !'],
        minlength: [3, 'Min length should be  3'],
        maxlength: [10, 'max length should not be 10 '],
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
// Model
const productModel = model('Product', productSchema);
module.exports = productModel;

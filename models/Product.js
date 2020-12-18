const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({    
    description: {
        type: String,
        required: true
    },  
    type: {
        type: String,
        required: true
    },
    sport: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,        
    },
    rating: {
        type: Number,
        required: true,        
    },
    category: {
        type: String,
        required: true,        
    },
    discount: {
        type: Boolean,
        required: true,        
    },
    newp: {
        type: Boolean,
        required: true,        
    },
    imagepath: {
        type: String,
        required: true,        
    },
});


module.exports = mongoose.model('Products', ProductSchema);
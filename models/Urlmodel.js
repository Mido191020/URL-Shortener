const mongoose = require('mongoose');

// Define the schema
const UrlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    shortUrlVersion: {
        type: String,
        unique: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// Create the model
const Url = mongoose.model('Url', UrlSchema);

// Export the model
module.exports = Url;

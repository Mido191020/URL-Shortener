// db.js
require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

const dbURI = process.env.DATABASE; // Access the MongoDB URI from environment variables

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process if there is an error
  }
};

module.exports = connectDB;

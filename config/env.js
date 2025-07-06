require('dotenv').config();
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connect to the mongoDb!");
  } catch (error) {
    console.error("MongoDB Error!!!!!!!:", error.message);
  }
};

module.exports = connectDB;
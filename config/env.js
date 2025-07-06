const mongoose = require("mongoose");
MONGO_URI ='mongodb+srv://kader201108:yBogPvsxW1HwDJDK@cluster0.adi9owv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connect to the mongoDb!");
  } catch (error) {
    console.error("MongoDB Error!!!!!!!:", error.message);
  }
};

module.exports = connectDB;
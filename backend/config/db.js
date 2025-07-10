const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDb is connected successfully!!");
  } catch (error) {
    console.error("Error connecting db", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

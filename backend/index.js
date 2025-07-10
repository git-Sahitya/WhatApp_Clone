const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
PORT = process.env.PORT || 5000;

//Database connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const dotenv = require("dotenv")

const app = express()
dotenv.config()

PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
    
})
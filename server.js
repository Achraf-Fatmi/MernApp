const express = require ('express');
const { path } = require('express/lib/application');
require('dotenv').config({path:"./config/.env"})

const connectDB = require('./config/connectDB')
connectDB()
const app = express();

app.use (express.json())

app.use('/api/user', require('./Routes/user'))




const port = process.env.PORT

app.listen(port, (err)=>
err? console.log(err): console.log (`server is running on port ${port}`)
)
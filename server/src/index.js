const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());



app.listen(8123, ()=>{
    console.log("The server is listening")
})
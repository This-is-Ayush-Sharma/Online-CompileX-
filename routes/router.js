const express = require('express');
const app = express();

app.get('/health',(req,res)=>{
    res.send("The server is up and running");
})

module.exports = app;
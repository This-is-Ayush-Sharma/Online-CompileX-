const express = require('express');
const app = express();

//controller
const compileController = require('../controllers/compiler.controller');

app.get('/health',(req,res)=>{
    res.send("The server is up and running");
})

app.get('/',(req,res)=>{
    res.render('show')
})
app.post('/ccompile',compileController.CompileC);

module.exports = app;
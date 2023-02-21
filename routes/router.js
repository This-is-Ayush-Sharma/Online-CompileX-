const express = require('express');
const app = express();

//controller
const compileController = require('../controllers/compiler.controller');
const compilerRestController = require('../controllers/compiler.rest.controller');

app.get('/health',(req,res)=>{
    res.send("The server is up and running");
})

app.get('/',(req,res)=>{
    return res.render('show');
})

app.get('/playground',(req,res)=>{
    return res.render('editor');
})

app.post('/ccompile',compileController.CompileC_Cpp);



// configure Rest api
app.post('/compile/c-cpp',compilerRestController.CompileC_Cpp);

module.exports = app;
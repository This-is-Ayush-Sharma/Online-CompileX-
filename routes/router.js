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

app.post('/ccompile',compileController.HandlerC_Cpp);
app.post('/javacompile',compileController.HandlerJava);
app.post('/pythoncompile',compileController.HandlerPython);


// configure Rest api
app.post('/compile/c-cpp',compilerRestController.HandlerC_Cpp);
app.post('/compile/java',compilerRestController.HandleJava);
app.post('/compile/python',compilerRestController.HandlePython);

module.exports = app;
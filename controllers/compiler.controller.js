// this file deals with code compilation
var compiler = require('compilex');
var options = { stats: true };
compiler.init(options);

var envData = { OS: "windows", cmd: "g++" ,options: {timeout:1000 }};

exports.CompileC_Cpp = async (req,res)=>{
    const{code,input} = req.body;
    await new Promise((resolve,reject)=>{
        compiler.compileCPPWithInput(envData , code , input ,(data)=>{
            console.log(data);
            resolve()
        });
    })
    return res.send("1")
}
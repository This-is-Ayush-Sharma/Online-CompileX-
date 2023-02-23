var compiler = require('compilex');
var options = { stats: true };
compiler.init(options);

var envData = { OS: "windows", cmd: "g++" ,options: {timeout:1000 }};
exports.CompileC_Cpp = async(code,input)=>{
    var output;
    if(input=="") input=" "; //if input is empty
    await new Promise((resolve,reject)=>{
        compiler.compileCPPWithInput(envData , code , input ,(data)=>{
            output = data;
            resolve();
        });
    });
    return output;
}
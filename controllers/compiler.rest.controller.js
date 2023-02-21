const compileX = require('compilex');
var options = { stats: true };
compiler.init(options);

var envData = { OS: "windows", cmd: "g++" ,options: {timeout:1000 }};

exports.CompileC_Cpp = async(req,res)=>{
    const { code,input } = req.body;
    new Promise((resolve,reject)=>{
        compileX.compileCPPWithInput(envData,code,input,(data)=>{
            console.log(data);
            // send output to client
            resolve();
        })
    })
}

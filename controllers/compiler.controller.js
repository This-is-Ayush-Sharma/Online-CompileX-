// this file deals with code compilation
var compiler = require('compilex');
var options = { stats: true };
compiler.init(options);

var envData = { OS: "windows", cmd: "g++" ,options: {timeout:1000 }};

exports.CompileC = (req,res)=>{
    const{code,input} = req.body;
    compiler.compileCPPWithInput(envData , code , input , function (data) {
        console.log(data);
        // console.log();
        // console.log();
        compiler.flush(function(){
            console.log('All temporary files flushed !'); 
        });
    });
    
    // return res.send(1)
}
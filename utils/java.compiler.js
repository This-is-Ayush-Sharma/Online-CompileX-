var compiler = require('compilex');
var options = { stats: true };
compiler.init(options);

var envData = { OS: "windows", options: { timeout: 1000 } };

exports.CompileJava = async (code, input) => {
    var output;
    if (input == "") input = " "; //if input is empty
    await new Promise((resolve, reject) => {
        compiler.compileJavaWithInput(envData, code, input, (data) => {
            output = data;
            resolve();
        });
    })
    return output;
}
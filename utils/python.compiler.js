var compiler = require('compilex');
var options = { stats: true };
compiler.init(options);

var envData = {
    OS: process.platform === 'win32' ? "windows" : "linux",
    options: { timeout: 1000 }
};

exports.CompilePython = async (code, input) => {
    var output;
    if (input == "") input = " "; //if input is empty
    await new Promise((resolve, reject) => {
        compiler.compilePythonWithInput(envData, code, input, (data) => {
            output = data;
            resolve();
        });
    });
    return output;
}
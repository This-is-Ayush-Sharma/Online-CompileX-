const { CompileC_Cpp } = require('../utils/c-cpp.compiler');
const { CompileJava } = require('../utils/java.compiler');
const { CompilePython } = require('../utils/python.compiler');

exports.HandlerC_Cpp = async (req, res) => {
    const { code, input } = req.body;
    var output = await CompileC_Cpp(code, input);
    return res.json(output);
}

exports.HandleJava = async (req, res) => {
    const { code, input } = req.body;
    var output = await CompileJava(code, input);
    return res.json(output);
}

exports.HandlePython = async (req, res) => {
    const { code, input } = req.body;
    var output = await CompilePython(code, input);
    return res.json(output);
}
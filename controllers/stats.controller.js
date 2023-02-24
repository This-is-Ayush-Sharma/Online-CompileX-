var compiler = require('compilex');
var options = { stats: true };
compiler.init(options);

exports.stats = async (req, res) => {
    var stats;
    await new Promise((resolve, reject) => {
        compiler.fullStat((data) => {
            stats = data;
            resolve();
        });
    })
    return res.json(stats);
}
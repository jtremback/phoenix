var opts = require('secure-scuttlebutt/defaults');
var SSB = require('secure-scuttlebutt');
module.exports = SSB(require('./db'), opts);

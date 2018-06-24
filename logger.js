// This Module Wrapper Function
//(function (exports, require, module, __filename, __dirname) {});
// console.log(__filename);
// console.log(__dirname);
const EventEmitter = require('events');
//const emitter = new EventEmitter();
var url = "http://mylogger.io/log";
class Logger extends EventEmitter{
    log(message){
        // Send HTTP Request
        console.log('In log func: ',message);
        // Raise an event
        this.emit('messageLogged',{id:1, url:'http://'});
    }
    abc(message){
        // Send HTTP Request
        console.log('in abc func: ',message);
    }
}


module.exports = Logger;
//module.exports.abc = abc;
// module.exports.url = url;
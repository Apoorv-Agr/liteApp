// const express = require("express");
// const app = express();
// console.log(`fdgdsfgd ${app}`);
const path = require('path'); 
const os = require('os');
const fs = require('fs');

const EventEmitter = require('events');
//const emitter = new EventEmitter();

const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged',(args) => {
    console.log('Listener Called ',args);  
})
//console.log('Logger ', Logger);
//console.log('logger ', logger);
logger.log("message");
logger.abc("sfgdafg");

return;

// emit means Making a noise, produce something - signaling an event is happening

// Raise an event called logging (data : message)
// emitter.on('onlogin', (args) => {
//     console.log('Login',args.data);
// });

// emitter.emit('onlogin',{data:'Success'});

// return;


//return;
//console.log(logger);


var pathObj = path.parse(__filename);
console.log(pathObj);
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory ${totalMemory}`);
console.log(`Free Memory ${freeMemory}`);

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./',function(err,res){
    if(err) console.log('Error ',err);
    else console.log('Rsult ', res);
})
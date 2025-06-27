
//log.js
var myLogModule = require('./utility/log.js');           
myLogModule.warning('Warning node not found..');
myLogModule.error('Error: Node encountered an error');
myLogModule.info('Node running..');

//message.js
var msg = require('./utility/message.js');               
console.log(msg);

//data.js
var person = require('./utility/data.js');
console.log(person.firstName + ' ' + person.lastName);

//function 
// var msg = require('./utility/log.js');
// msg.log('Hello World');
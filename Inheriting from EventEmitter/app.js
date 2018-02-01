var EventEmitter = require('events');
var util = require('util');

//Create Function
function Greetr() {
    //Property we add to any objects created from it
    this.greeting = 'Hello World';
}

//Use util.Inherit for any new objects I create from Greetr 
//will also get all the EventEmitter methods and properties
util.inherits(Greetr,EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ' : ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();
greeter1.on('greet', function(data){
    console.log('Someone say hello!' + ' : ' + data);
});

greeter1.greet('Martin');

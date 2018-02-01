'use strict';

var Greetr = require('./greetr');
var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log('Someone say hello!' + ' : ' + data);
});

greeter1.greet('Martinacho');
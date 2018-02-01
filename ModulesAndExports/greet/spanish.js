var greetings = require('./greeting.json')

//This is wrapped in a function expression so I have to pass a parameter to this function
var greet = function(){
    console.log(greetings.sp);
}

//Module is passed on this function and it has an exports parameter on it
module.exports = greet;
'use strict';

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log('Hello ' + this.firstName + ' ' + this.lastName);
    }
}

var john = new Person('John', 'Doe');
john.greet();

console.log(john.__proto__);
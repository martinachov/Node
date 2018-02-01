//Create the object using a Function Constructor
function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    //Make sure that this property exists
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;
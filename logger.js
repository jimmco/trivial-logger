'use strict';

// Trivial console logger
class Logger {
    constructor(location) {
        this.location = location;
    }

     trace(msg) {
        this.message("|trace|", msg );
    }
     info(msg) {
        this.message("|info|", msg );
    }
     debug(msg) {
        this.message("|debug|", msg);
    }
     error(msg) {
        this.message("|error|", msg);
    }
     bold(type, msg) {
         this.message(type,msg);
         this.separator();
    }
     message(type,msg) {
         console.log(type, this.location,"\t|", msg);
    }
     separator() {
        console.log("--------------------------------------------------")
    }
}

module.exports = Logger;

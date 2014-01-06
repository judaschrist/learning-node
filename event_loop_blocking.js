EE = require('events').EventEmitter;
ee = new EE();

die = false;

ee.on('die', function() {
    console.log('done');
});

setTimeout(function() {
    ee.emit('die');
}, 5000);

/*
 * Once setup has been completed, make all actions event-driven.
 * If Node.js is required to process something that will take a long time, 
 * consider delegating it to web workers.
 */

// if this is not commented out, the event-loop will not be triggered!
// while(!die) {
// }

console.log('start');



const consume = require('./consumer.js');
const produce = require('./producer.js');
// const grok = require('grok-js');

async function run() {
    await consume();
    produce("Hello world");
}

run();
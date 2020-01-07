# gork-conflict
This repo is a minimal example of the conflict between grok-js and kafkajs.

### Setup
#### Docker
Install docker and docker-compose.
In the project's repository run: `docker-compose up -d`.
#### Node
In the project's repository run:`npm install` and `node app.js`.

In `app.js` uncomment `const grok = require('grok-js');` to reproduce the error.
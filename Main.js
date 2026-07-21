const moment = require('moment-timezone');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const logger = require('./utils/log');
const login = require('robiul-z-fca');
const axios = require('axios');

global.client = {
    commands: new Map(),
    events: new Map(),
    cooldowns: new Map(),
    // ... aro onek kichu
}

global.data = {
    threadInfo: new Map(),
    userName: new Map(),
    // ...
}

// 1. config.json load
const config = require('./config.json');

// 2. language load
const langFile = fs.readFileSync(`./languages/${config.language}.lang`, 'utf-8');

// 3. appstate diye login
const appState = require('./appstate.json');
login({appState}, (err, api) => {
    if(err) return logger.error(err);
    global.client.api = api;
    // bot start
    api.listenMqtt((err, event) => {
        // command handle kore
    });
});

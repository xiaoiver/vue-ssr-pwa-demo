/**
 * @file build.js
 * @author lavas
 */

const LavasCore = require('lavas');

let core = new LavasCore(__dirname);

core.init(process.env.NODE_ENV || 'production', true)
    .then(() => core.build())
    .catch(e => {
        console.error(e);
    });

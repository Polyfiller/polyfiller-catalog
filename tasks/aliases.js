'use strict';

module.exports = {
    build: [
        'babel:build'
    ],

    test: [
        'clean',
        'build',
        'mochaTest:catalog'
    ],

    default: [ ]
};

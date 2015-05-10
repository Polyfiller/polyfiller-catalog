'use strict';

module.exports = {
    build: [
        'clean',
        'babel:build'
    ],

    test: [
        'build',
        'mochaTest:catalog'
    ],

    default: [ ]
};

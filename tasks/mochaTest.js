'use strict';

module.exports = function (grunt, options) {
    return {
        catalog: {
            options: {
                timeout    : 10 * 1000,
                ignoreLeaks: false,
                ui         : 'bdd',
                reporter   : 'spec'
            },

            src: [
                'build/tests/catalog.js'
            ]
        }
    };
};

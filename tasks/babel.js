'use strict';

module.exports = function (grunt, options) {
    return {
        options: {
            compact : false,
            comments: true,

            optional: [
                'spec.protoToAssign'
            ],

            ignore: ['**/*.json']
        },

        build: {
            files: [
                {
                    expand: true,
                    src   : ['index.js', '{files,tests,utils}/**/*.{js,json}' ],
                    dest  : 'build',
                }
            ]
        }
    };
};

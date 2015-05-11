'use strict';

import path from 'path';

export default {
    get SOURCES () {
        let location = path.resolve(__dirname, './files');

        return [ location ];
    },

    get MODULES () {
        let location = path.resolve.bind(null, __dirname, '../');

        return [
            location('node_modules'),
            location('bower_components')
        ];
    }
};

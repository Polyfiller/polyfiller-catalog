'use strict';

import path from 'path';

export default {
    get SOURCES () {
        return path.resolve(__dirname, './files');
    },

    get MODULES () {
        return path.resolve(__dirname, '../node_modules');
    }
};

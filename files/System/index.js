'use strict';

import path from 'path';
import resolve from 'resolve';

let file = resolve.sync('es6-module-loader');
    file = path.dirname(file);
    file = path.join(file, 'dist/es6-module-loader.js');

export default [
    {
        type: 'file',
        name: file
    }
];

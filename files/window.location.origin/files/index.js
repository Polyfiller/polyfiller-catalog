(function (global) {
    'use strict';

    if (!global.location.origin) {
        global.location.origin = global.location.protocol +
            '//' + global.location.hostname + (global.location.port ?
            ':' + global.location.port : '');
    }

}(this));

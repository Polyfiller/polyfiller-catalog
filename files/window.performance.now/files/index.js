(function (global) {
    'use strict';

    if ('performance' in global == false) {
        global.performance = {};
    }

    if ('now' in global.performance == false) {
        var nowOffset = Date.now();

        if (global.performance.timing && global.performance.timing.navigationStart) {
            nowOffset = global.performance.timing.navigationStart
        }

        global.performance.now = function () {
            return Date.now() - nowOffset;
        }
    }

}(this));

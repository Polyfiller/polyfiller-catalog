(function (global) {
    'use strict';

    // If the user is using an anonymizing service, then the value "en-US" is suggested;
    // http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#navigatorlanguage
    if (!global.navigator.language) {
        var code = 'en-US';

        // IE 10 in IE8 mode on Windows 7 uses lower-case
        // in navigator.userLanguage country codes
        // http://msdn.microsoft.com/en-us/library/ie/ms533052.aspx
        if (global.navigator.userLanguage) {
            code = global.navigator.userLanguage.replace(/\-[a-z]{2}$/, function (text) {
                return text.toUpperCase();
            });
        }

        global.navigator.language = code;
    }
}(this));

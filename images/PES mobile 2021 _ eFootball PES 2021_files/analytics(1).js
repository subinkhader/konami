(function () {
    "use strict";
    var lib;

    window.dataLayer = window.dataLayer || [];

    lib = {
        conversionLink: function (id) {
            window.dataLayer.push({
                'event':         'commonEvent',
                'eventCategory': 'ConversionLink',
                'eventAction':   'ConversionLink' + ':' + id
            });
        },
        conversion: function (id) {
            window.dataLayer.push({
                'event':         'commonEvent',
                'eventCategory': 'Conversion',
                'eventAction':   'Conversion' + ':' + id
            });
        },
        event:          function (category, action) {
            window.dataLayer.push({
                'event':         'commonEvent',
                'eventCategory': category,
                'eventAction':   category + ':' + action
            });
        }
    };

    window.__getWebAnalyticsLib = function () {
        return lib;
    };

    window.webanalytics = window.webanalytics || window.__getWebAnalyticsLib();
})(); 
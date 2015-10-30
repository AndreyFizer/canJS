/**
 * Created by Andrey on 24.10.2015.
 */

var App = {};

require.config({
    paths: {
        jquery          : './libs/jquery/dist/jquery',
        can             : './libs/CanJS/can.custom',
        lodash          : './libs/lodash/lodash',
        text            : './libs/text/text',
        views           : './views',
        models          : './models',
        templates       : '../templates'
    },
    shim: {
        'can'           : ['jquery'],
        'app'           : ['can', 'lodash']
    }
});

require(['app'], function(app) {

});
/**
 * Created by Andrey on 24.10.2015.
 */

var App = {};

require.config({
    paths: {
        jquery          : './libs/jquery/dist/jquery',
        can             : './libs/CanJS/can.custom',
        text            : './libs/text/text',
        views           : './views',
        templates       : '../templates'
    },
    shim: {
        'can'           : ['jquery'],
        'app'           : ['can']
    }
});

require(['app'], function(app) {

});
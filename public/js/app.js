/**
 * Created by Andrey on 24.10.2015.
 */

require([
    'router',
    'views/userView'
], function(Router, indexView) {

    App.Router = Router;
    can.route.ready();

    var mainControl = new indexView('#wrapper', {});
});
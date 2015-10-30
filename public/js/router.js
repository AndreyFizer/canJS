/**
 * Created by Andrey on 29.10.2015.
 */

define([
], function () {

    var Router = can.Control({
        "route" : function(data){
            alert(data);
        },

        ":type route" : function(data) {
            alert('2');
        },

        "todo/:id route" : function(data) {
            alert('3');
        }
    });

    new Router();
});
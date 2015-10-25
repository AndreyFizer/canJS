/**
 * Created by Andrey on 24.10.2015.
 */

define([
], function () {
    var View;
    var tempFile = 'templates/index.mustache';

    View = can.Control.extend({

        init: function (element, options) {
            //var elSelector = this.element.selector;
            console.log(this.element);
            console.log($('#wraper'));

            //$(elSelector).html(can.view(tempFile, {
            this.element.html(can.view(tempFile, {
                message: 'CanJS'
            }));
        },

        "h1 click" : function (element, event){
            var target = element.closest('div');
            target.hide();
            event.stopPropagation();
        }

        });

    return View;
});

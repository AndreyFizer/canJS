/**
 * Created by Andrey on 24.10.2015.
 */

define([
    'models/indexModel'
], function (IndexModel) {
    var View;
    var tempFile = 'templates/index.mustache';

    View = can.Control.extend({

        init: function (element, options) {

            //can.Model.bind('created', this.onCreateFunction);
            this.indexModel = new IndexModel({name : 'Kiki'});
            this.indexModel.bind('created', this.onCreateFunction);

            //$(elSelector).html(can.view(tempFile, {
            this.element.html(can.view(tempFile, {
                message: 'CanJS'
            }));
        },

        "h1 click" : function (element, event){
            var target = element.closest('div');
            target.hide();
            event.stopPropagation();
        },

        onCreateFunction : function (event, newEvent){
            alert('Model Created successfully ' + newEvent);
        }

    });
    
    return View;
});

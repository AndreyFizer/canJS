/**
 * Created by Andrey on 24.10.2015.
 */

define([
    'models/userModel'
], function (UserModel) {
    var View;
    var tempFile = 'templates/userTemplate.mustache';

    View = can.Control.extend({

        init: function (element, options) {

            //can.Model.bind('created', this.onCreateFunction);
            this.userModel = new UserModel();
            this.userModel.bind('created', this.onCreateFunction);

            //$(elSelector).html(can.view(tempFile, {
            this.element.html(can.view(tempFile, {
                message: 'CanJS'
            }));
        },

        "#userButton click" : function(){this.onSaveUser()},

        onSaveUser : function (){
            var nameValue = this.element.find('#userName').val();
            var mailValue = this.element.find('#userMail').val();
            this.userModel.attr('firstName', nameValue);
            this.userModel.attr('email', mailValue);
            this.userModel.save(function(result){
                console.dir(result);
            });
        },

        onCreateFunction : function (event, newEvent){
            alert('Model Created successfully ' + newEvent);
        }

    });
    
    return View;
});

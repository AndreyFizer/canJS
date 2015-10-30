/**
 * Created by Andrey on 24.10.2015.
 */

define([
    'models/userModel',
    'text!templates/userTemplate.html'
], function (UserModel, Template) {
    var View;
    View = can.Control.extend({

        init: function (element, options) {

            this.userModel = new UserModel();
            this.userModel.bind('created', this.onCreateFunction);

            this.element.html(_.template(Template)({message : 'CanJS'}));
        },

        "#userButton click" : function(){this.onSaveUser()},

        onSaveUser : function (){
            var nameValue = this.element.find('#userName').val();
            var mailValue = this.element.find('#userMail').val();
            if (nameValue !== '' || mailValue !== '') {
                this.userModel.attr('firstName', nameValue);
                this.userModel.attr('email', mailValue);
                this.userModel.save(function (result) {
                    console.dir(result);
                });
            } else {
                alert ('Not enough incoming parameters');
            }
        },

        onCreateFunction : function (event, newEvent){
            alert('Model Created successfully ' + newEvent);
        }

    });
    
    return View;
});

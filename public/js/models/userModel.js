/**
 * Created by Andrey on 26.10.2015.
 */

define([

],function(){
    var userModel;

    userModel = can.Model.extend({
        findAll : 'GET /index',
        findOne : 'GET /index/{id}',
        update  : 'PUT /index/{id}',
        destroy : 'DELETE /index/{id}',
        create  : 'POST /users/'
    },{});

    return userModel;
});
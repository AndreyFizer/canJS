/**
 * Created by Andrey on 03.10.2015.
 */
'use strict';

module.exports = (function () {
    var mongoose = require('mongoose');

    var userSchema = mongoose.Schema({
        email         : {type: String, require: true, unique: true},
        pass          : {type: String, default: null},
        firstName     : {type: String, default: null},
        lastName      : {type: String, default: null},
        role          : {type: Number, required: true, default: 1},
        createdAt     : {type: Date, default: Date.now},
        updatedAt     : {type: Date, default: Date.now}
    }, {
        collection    : 'Users'
    });

    mongoose.model('User', userSchema);

    if (!mongoose.Schemas) {
        mongoose.Schemas = {};
    }

    mongoose.Schemas['User'] = userSchema;

    if (process.env.NODE_ENV !== 'production') {
        userSchema.set('autoIndex', false);
    }

})();
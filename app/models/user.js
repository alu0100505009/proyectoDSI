var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


var userSchema = mongoose.Schema({
    local            : {
        name         : String,
        username     : String,
        edad         : Number, 
        email        : String,
        password     : String
    },
    google           : {
        id           : String,
        token        : String,
        name         : String,
        username     : String,
        edad         : Number, 
        email        : String,
        password     : String
    }
});


// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
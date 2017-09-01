var mongoose    = require('mongoose');

// Ninja Model/Schema
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 36,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
},{ timestamps: true });

mongoose.model('User', UserSchema);

var mongoose    = require('mongoose');
var Schema = mongoose.Schema;

// Profile Model/Schema
var ProfileSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 36
    },
    lName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 42
    },
    _user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
},{ timestamps: true });

mongoose.model('Profile', ProfileSchema);

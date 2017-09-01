var mongoose    = require('mongoose');
// Mongo DB connect
mongoose.connect('mongodb://localhost/job-ui');
require('../models/user.js');
require('../models/profile.js');
 
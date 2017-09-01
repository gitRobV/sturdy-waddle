var apiProfileController = require('./../../controllers/api/profile.js');

module.exports = function(app) {
    // **** API Auth Routes ****
    // Get Route - Check Authentication return User
    app.get('/api/profile/getCurrProfile', apiProfileController.getUserProfile);

    app.post('/api/profile/createUserProfile', apiProfileController.createUserProfile);

    app.post('/api/profile/updateUserProfile', apiProfileController.updateUserProfile);

    app.get('/api/profile/getAllUsers', apiProfileController.getAllUsers);
    
}
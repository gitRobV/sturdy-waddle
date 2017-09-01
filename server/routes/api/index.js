var apiIndexController = require('./../../controllers/api/index.js');

module.exports = function(app) {
    // **** API Auth Routes ****
    // Index Route - Check Authentication return User
    app.get('/api/getUser', apiIndexController.getUser);
    // Create User - Post route to Register New User
    app.post('/api/regUser', apiIndexController.regUser);
    // Authenticate Route - Authenticate Existing User
    app.post('/api/authUser', apiIndexController.authUser  );
    // Logut Route - Destroy User Session
    app.get('/api/logout', apiIndexController.logout );
}
 
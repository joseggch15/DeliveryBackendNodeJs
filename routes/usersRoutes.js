const UsersController = require('../controller/UsersController');

module.exports = (app) => {
 
    app.get('/api/users/getAll', UsersController.getAll);
    
    
};
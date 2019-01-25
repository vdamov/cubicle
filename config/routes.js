const controllers = require('./../controllers/index');
module.exports = app => {
    app.get('/', controllers.home.home);
    app.post('/', controllers.home.search);
    app.get('/about', controllers.about);
    app.get('/create', controllers.create.createGet);
    app.post('/create', controllers.create.createPost);
    app.get('/details/:id', controllers.details);
};
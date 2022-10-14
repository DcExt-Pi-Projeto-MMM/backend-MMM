const { Router } = require('express');

const routes = new Router();
// eslint-disable-next-line no-unused-vars
const path = require('path');
const user_controllers = require('./controllers/user_controllers');
const create_user = require('./controllers/create_user');
const delete_user = require('./controllers/delete_user');
const add_produtos = require('./controllers/add_produtos');
const produtos_controllers = require('./controllers/produtos_controllers');

routes.post('/verificacao', user_controllers.store);
routes.put('/dashboard/cadastro', create_user.update);
routes.delete('/dashboard/cadastro', delete_user.destroy);

routes.post('/dashboard/produtos', produtos_controllers.store);
routes.put('/feed/produtos', add_produtos.update);

module.exports = routes;

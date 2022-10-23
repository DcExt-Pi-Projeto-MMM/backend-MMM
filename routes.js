const { Router } = require('express');

const routes = new Router();
// eslint-disable-next-line no-unused-vars
const path = require('path');
const user_controllers = require('./controllers/user_controllers');
const create_user = require('./controllers/create_user');
const delete_user = require('./controllers/delete_user');
const add_produtos = require('./controllers/add_produtos');
const produtos_controllers = require('./controllers/produtos_controllers');
const produtos_individuais_controllers = require('./controllers/produtos_individuais_controllers');
const produtos_disponibilidade = require('./controllers/produtos_disponibilidade');
const delete_produtos = require('./controllers/delete_produtos');
const user_senha = require('./controllers/user_senha');
const usuarios_regiao = require('./controllers/usuarios_regiao');

routes.post('/verificacao', user_controllers.store);
routes.put('/dashboard/cadastro', create_user.update);
routes.put('/dashboard/cadastro/senha', user_senha.update);
routes.delete('/dashboard/cadastro', delete_user.destroy);
routes.post('/dashboard/cadastro/regiao', usuarios_regiao.store);

routes.post('/dashboard/produtos', produtos_controllers.store);
routes.post('/dashboard/produtos/individuais', produtos_individuais_controllers.store);
routes.post('/dashboard/produtos/disponibilidade', produtos_disponibilidade.store);
routes.put('/dashboard/produtos/disponibilidade', produtos_disponibilidade.update);
routes.put('/feed/produtos', add_produtos.update);
routes.delete('/feed/produtos', delete_produtos.destroy);

module.exports = routes;


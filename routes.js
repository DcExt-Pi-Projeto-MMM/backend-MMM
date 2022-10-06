const { Router } = require('express');

const routes = new Router();
// eslint-disable-next-line no-unused-vars
const path = require('path');
const SessionController = require('./controllers/user_controllers');
const create_user = require('./controllers/create_user');
const delete_user = require('./controllers/delete_user');

/* routes.get('/', (req, res) => {
  res.json({ ok: true });
}); */

routes.post('/feed', SessionController.store);
routes.put('/feed/cadastro', create_user.update);
routes.delete('/feed/cadastro', delete_user.destroy);

module.exports = routes;

/* eslint-disable new-cap */
const produtos = require('../produtos.json');

class produtos_controllers {
  store(req, res) {
    res.status(200).send(produtos);
  }
}

module.exports = new produtos_controllers();

/* eslint-disable new-cap */
// eslint-disable-next-line no-unused-vars
const path = require('path');
const produtos = require('../produtos.json');

const disponivel = [];
class produtos_controllers {
  store(req, res) {
    for (let i = 0; i < produtos.length; i += 1) {
      if (produtos[i].disponibilidade === 'disponivel') {
        disponivel.push(produtos[i]);
      }
    }
    res.status(200).send(disponivel);
  }
}

module.exports = new produtos_controllers();

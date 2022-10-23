/* eslint-disable new-cap */
const produtos = require('../produtos.json');

class produtos_individuais_controllers {
  async store(req, res) {
    const { id } = req.body;
    const produtos_individuais = [];
    for (let i = 0; i < produtos.length; i += 1) {
      if (produtos[i].id_usuario === id) {
        produtos_individuais.push(produtos[i]);
      }
    }
    res.status(200).send(produtos_individuais);
  }
}

module.exports = new produtos_individuais_controllers();

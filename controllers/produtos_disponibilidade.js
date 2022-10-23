/* eslint-disable brace-style */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable new-cap */
const fs = require('fs');
const produtos = require('../produtos.json');

class produtos_disponibilidade {
  async store(req, res) {
    const produtos_disponiveis = [];
    const { disponibilidade } = req.body;
    if (disponibilidade === 'disponivel') {
      for (let i = 0; i < produtos.length; i += 1) {
        if (produtos[i].disponibilidade === disponibilidade) {
          produtos_disponiveis.push(produtos[i]);
        }
      }
      return res.status(200).send(produtos_disponiveis);
    }
    else if (disponibilidade === 'indisponivel') {
      const produtos_indisponiveis = [];
      for (let i = 0; i < produtos.length; i += 1) {
        if (produtos[i].disponibilidade === disponibilidade) {
          produtos_indisponiveis.push(produtos[i]);
        }
      }
      return res.status(200).send(produtos_indisponiveis);
    }
    res.status(404).json({ error: 'disponibilidades: disponivel ou indisponivel' });
  }

  async update(req, res) {
    const { id } = req.body;
    const { nova_disponibilidade } = req.body;
    const { id_usuario } = req.body;

    for (let i = 0; i < produtos.length; i += 1) {
      if (id === JSON.stringify(produtos[i].id)) {
        if (id_usuario === produtos[i].id_usuario) {
          produtos[i].disponibilidade = nova_disponibilidade;
          fs.writeFileSync('./produtos.json', JSON.stringify(produtos, null), 'utf-8');
          res.status(200).send(produtos[i]);
          return;
        }
      }
    }
    res.status(404).json({ error: 'usuário não tem permissão ou operação não disponível' });
  }
}

module.exports = new produtos_disponibilidade();

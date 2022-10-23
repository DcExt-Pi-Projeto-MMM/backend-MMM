/* eslint-disable eqeqeq */
const fs = require('fs');

const data = fs.readFileSync('./produtos.json', 'utf-8');
const produtos = JSON.parse(data);

class delete_produto {
  destroy(req, res) {
    const { id } = req.body;
    const { id_usuario } = req.body;
    for (let i = 0; i < produtos.length; i += 1) {
      if (id == produtos[i].id) {
        if (id_usuario == produtos[i].id_usuario) {
          produtos.splice(i, 1);
          fs.writeFileSync('./produtos.json', JSON.stringify(produtos, null), 'utf-8');
          res.json({ ok: true });
          return;
        }
      }
    }
    res.json({ error: 'usuario não tem permissão ou produto indisponível para o processo' });
  }
}

// eslint-disable-next-line new-cap
module.exports = new delete_produto();

/* eslint-disable new-cap */
const fs = require('fs');

const data = fs.readFileSync('./produtos.json', 'utf-8');
const produto = JSON.parse(data);

class add_produtos {
  async update(req, res) {
    const { alimento } = req.body;
    const { quantidade } = req.body;
    const { endereco } = req.body;
    const { preco } = req.body;
    const { disponibilidade } = req.body;
    const { id_usuario } = req.body;
    const id = Math.random();

    await produto.push({
      alimento, quantidade, endereco, preco, disponibilidade, id_usuario, id,
    });
    fs.writeFileSync('./produtos.json', JSON.stringify(produto, null), 'utf-8');

    return res.json({ produto });
  }
}

module.exports = new add_produtos();


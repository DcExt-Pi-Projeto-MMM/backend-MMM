/* eslint-disable new-cap */
const usuarios = require('../usuarios.json');

class usuarios_regiao {
  async store(req, res) {
    const { regiao } = req.body;
    const regiao_selecionada = [];
    for (let i = 0; i < usuarios.length; i += 1) {
      if (regiao === usuarios[i].regiao) {
        regiao_selecionada.push(usuarios[i]);
      }
    }
    res.status(200).send(regiao_selecionada);
  }
}

module.exports = new usuarios_regiao();

/* eslint-disable new-cap */
const fs = require('fs');
const usuarios = require('../usuarios.json');

class atualizar_senha {
  async update(req, res) {
    const { id } = req.body;
    const { senha_antiga } = req.body;
    const { senha_nova } = req.body;
    for (let i = 0; i < usuarios.length; i += 1) {
      if (id === JSON.stringify(usuarios[i].id)) {
        if (senha_antiga === usuarios[i].senha) {
          usuarios[i].senha = senha_nova;
          fs.writeFileSync('./usuarios.json', JSON.stringify(usuarios, null), 'utf-8');
          res.status(200).json({ ok: 'senha atualizada com sucesso' });
          return;
        }
      }
    }
    res.status(404).json({ error: 'usuário não tem permissão ou operação não disponível' });
  }
}

module.exports = new atualizar_senha();

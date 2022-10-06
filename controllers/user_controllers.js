// eslint-disable-next-line no-unused-vars
const path = require('path');
const usuarios = require('../usuarios.json');

class SessionController {
  store(req, res) {
    let c = 0;
    const { usuario } = req.body;
    const { senha } = req.body;
    for (let i = 0; i < usuarios.length; i += 1) {
      if (usuario === usuarios[i].login && senha === usuarios[i].senha) {
        // eslint-disable-next-line no-unused-vars
        const { cargo } = usuarios[i];
        res.json({ ok: true });
      } else {
        c += 1;
        if (c === usuarios.length) {
          res.json({ not: false });
        }
      }
    }
  }
}

module.exports = new SessionController();

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
<<<<<<< HEAD
        res.status(200).send(usuario);
        return;
<<<<<<< HEAD
      }
      c += 1;
      if (c === usuarios.length) {
        res.status(404).send(false);
        return;
=======
=======
        res.json({ ok: true });
>>>>>>> fa82dda1c1a50e725c76f2e7d7f259bce6db3424
      } else {
        c += 1;
        if (c === usuarios.length) {
          res.json({ not: false });
        }
>>>>>>> f7479d511ecaaba3fa15e5a9e95fb50e113728d0
      }
    }
  }
}

module.exports = new SessionController();

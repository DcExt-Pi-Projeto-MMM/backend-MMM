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

        res.status(200).send(usuarios[i]);
        return;
      }
      c += 1;
      if (c === usuarios.length) {
        res.status(404).json({ error: false });
        return;
      }
    }
  }
}

module.exports = new SessionController();

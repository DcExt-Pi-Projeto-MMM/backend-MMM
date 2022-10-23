/* eslint-disable no-unused-vars */
const fs = require('fs');
const yup = require('yup');
const usuarios = require('../usuarios.json');

const data = fs.readFileSync('./usuarios.json', 'utf-8');
const user = JSON.parse(data);

function createId() {
  return Math.random();
}

class createUser {
  async update(req, res) {
    const schema = yup.object().shape({
      login: yup.string().required(),
      senha: yup.number().required(),
      cargo: yup.string().required(),
      email: yup.string().email().required(),
      regiao: yup.string(),
    });
    const { login } = req.body;
    const { senha } = req.body;
    const { cargo } = req.body;
    const { email } = req.body;
    const { regiao } = req.body;
    const id = createId();

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação do cadastro' });
    }

    for (let i = 0; i < usuarios.length; i += 1) {
      if (login === usuarios[i].login) {
        return res.json({ error: 'usuário ja cadastrado' });
      }
      if (email === usuarios[i].email) {
        return res.json({ error: 'email já cadastrado' });
      }
    }

    await user.push({
      login, senha, cargo, email, id, regiao,
    });
    fs.writeFileSync('./usuarios.json', JSON.stringify(user, null), 'utf-8');
    return res.json({ ok: true });
  }
}

// eslint-disable-next-line new-cap
module.exports = new createUser();

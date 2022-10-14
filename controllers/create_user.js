/* eslint-disable no-unused-vars */
const fs = require('fs');
const yup = require('yup');
const usuarios = require('../usuarios.json');
const jwt = require('jsonwebtoken');

const data = fs.readFileSync('./usuarios.json', 'utf-8');
const user = JSON.parse(data);

class createUser {
  async update(req, res) {
    const schema = yup.object().shape({
      login: yup.string().required(),
      senha: yup.number().required(),
      cargo: yup.string().required(),
      email: yup.string().email().required(),
    });
    const { login } = req.body;
    const { senha } = req.body;
    const { cargo } = req.body;
    const { email } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação do cadastro' });
    }

    await user.push({
      login, senha, cargo, email,
    });
    fs.writeFileSync('./usuarios.json', JSON.stringify(user, null), 'utf-8');
    return res.json({ token: jwt.sing({ login }, '0ee4647cf7ecd7c5167616140b538ccf',{expiresIn: '3d',}), });
  }
}

// eslint-disable-next-line new-cap
module.exports = new createUser();

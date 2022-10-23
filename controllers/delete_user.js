/* eslint-disable no-plusplus */
const fs = require('fs');

const data = fs.readFileSync('./usuarios.json', 'utf-8');
const user = JSON.parse(data);

class delete_user {
  destroy(req, res) {
    const { login } = req.body;

    for (let i = 0; i < user.length; i++) {
      if (login === user[i].login) {
        user.splice(i, 1);
        fs.writeFileSync('./usuarios.json', JSON.stringify(user, null), 'utf-8');
        res.json({ ok: true });
        return;
      }
    }
  }
}

// eslint-disable-next-line new-cap
module.exports = new delete_user();

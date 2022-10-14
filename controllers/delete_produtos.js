const { json } = require('express');
const fs = require('fs');
/* const produtos = require('../produtos.json');
 */
const data = fs.readFileSync('./produtos.json', 'utf-8');
const produto = JSON.parse(data);

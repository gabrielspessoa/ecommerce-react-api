const express = require('express');
const router = express.Router();
const users = require('../services/users');

router.get('/', async function (req, res, next) {
  try {
    res.json(await users.getMultiple(req.query.page));
  } catch (err) {
    console.error('Erro ao obter usuários: ', err.message);
    next(err);
  }
});

module.exports = router;

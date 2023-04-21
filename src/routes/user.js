const express = require('express');
const router = express.Router();

router.post('/signin', (req, res) => {
  res.json({ id: 'user' });
});

module.exports = router;

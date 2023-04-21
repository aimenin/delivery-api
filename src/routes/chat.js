const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({ chat: id });
});

module.exports = router;

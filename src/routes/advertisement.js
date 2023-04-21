const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 'advertisement' }]);
});

module.exports = router;

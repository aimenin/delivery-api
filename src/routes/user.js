const express = require('express');
const router = express.Router();

router.post('/signin', (req, res) => {
  res.json({
    data: {
      id: '507f1f77bcf86cd799439011',
      email: 'kulagin@netology.ru',
      name: 'Alex Kulagin',
      contactPhone: '+7 123 456 78 90',
    },
    status: 'ok',
  });
});

router.post('/signup', (req, res) => {
  res.json({
    data: {
      id: '507f1f77bcf86cd799439011',
      email: 'kulagin@netology.ru',
      name: 'Alex Kulagin',
      contactPhone: '+7 123 456 78 90',
    },
    status: 'ok',
  });
});

module.exports = router;

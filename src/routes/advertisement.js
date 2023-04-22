const express = require('express');
const router = express.Router();

// получение всех объявлений
router.get('/', (req, res) => {
  res.json({
    data: [
      {
        id: '507f1f77bcf86cd799439012',
        shortTitle: 'Продам слона',
        description: 'kulagin@netology.ru',
        images: [
          '/uploads/507f1f77bcf86cd799439011/slon_v_profil.jpg',
          '/uploads/507f1f77bcf86cd799439011/slon_v_fas.jpg',
          '/uploads/507f1f77bcf86cd799439011/slon_hobot.jpg',
        ],
        user: {
          id: '507f1f77bcf86cd799439011',
          name: 'Alex Kulagin',
        },
        createdAt: '2020-12-12T10:00:00.000Z',
      },
    ],
    status: 'ok',
  });
});

// получение данных одного объявления
router.get('/:id', (req, res) => {
  res.json({
    data: {
      id: '507f1f77bcf86cd799439012',
      shortTitle: 'Продам слона',
      description: 'kulagin@netology.ru',
      images: [
        '/uploads/507f1f77bcf86cd799439011/slon_v_profil.jpg',
        '/uploads/507f1f77bcf86cd799439011/slon_v_fas.jpg',
        '/uploads/507f1f77bcf86cd799439011/slon_hobot.jpg',
      ],
      user: {
        id: '507f1f77bcf86cd799439011',
        name: 'Alex Kulagin',
      },
      createdAt: '2020-12-12T10:00:00.000Z',
    },
    status: 'ok',
  });
});

router.post('/', (req, res) => {
  // аунтификация
  res.json({
    data: [
      {
        id: '507f1f77bcf86cd799439012',
        shortTitle: 'Продам слона',
        description: 'kulagin@netology.ru',
        images: [
          '/uploads/507f1f77bcf86cd799439011/slon_v_profil.jpg',
          '/uploads/507f1f77bcf86cd799439011/slon_v_fas.jpg',
          '/uploads/507f1f77bcf86cd799439011/slon_hobot.jpg',
        ],
        user: {
          id: '507f1f77bcf86cd799439011',
          name: 'Alex Kulagin',
        },
        createdAt: '2020-12-12T10:00:00.000Z',
      },
    ],
    status: 'ok',
  });
});

router.delete('/:id', (req, res) => {
  // аунтификация
  res.json({ status: 'ok' });
});

module.exports = router;

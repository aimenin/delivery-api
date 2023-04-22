const express = require('express');
const router = express.Router();
const passport = require('passport');

const UserModule = require('../modules/user');

router.post(
  '/signin',
  passport.authenticate('local', {
    failureRedirect: '/api/user/login',
    failureFlash: true,
  }),
  function (req, res) {
    res.status(200).json({ message: 'ok' });
  }
);

router.post('/signup', async (req, res) => {
  try {
    const createdUser = UserModule.create(req.body);

    req.login(createdUser, (er) => {
      if (er) {
        res.json({ success: false, message: er });
      } else {
        res.json({ success: true, message: 'Your account has been saved' });
      }
    });
  } catch (e) {
    res.json({
      success: false,
      message: 'Your account could not be saved. Error: ' + err,
    });
  }
});

module.exports = router;

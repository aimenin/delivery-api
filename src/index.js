const express = require('express');
const http = require('http');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const { app, server } = require('./server');
const mongoose = require('mongoose');

const advertisementRouter = require('./routes/advertisement');
const chartRouter = require('./routes/chat');
const userRouter = require('./routes/user');
const User = require('./store/User');

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(
  session({
    secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use('/advertisements', advertisementRouter);
app.use('/user', userRouter);

const PORT = process.env.PORT || 3000;

const startApp = async (port) => {
  await mongoose.connect('mongodb://root:example@mongo:27017/');
  server.listen(port, () => {
    console.log('App is listening on port ' + port);
  });
};

startApp(PORT);

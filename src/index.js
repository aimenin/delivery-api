const express = require('express');
const http = require('http');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const { app, server } = require('./server');

const advertisementRouter = require('./routes/advertisement');
const chartRouter = require('./routes/chat');
const userRouter = require('./routes/user');

app.use(express.json());
app.use('/advertisements', advertisementRouter);
app.use('/user', userRouter);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('App is listening on port ' + PORT);
});

const express = require('express');
const { json } = express;
const helmet = require('helmet');
const { registerHandler, loginHandler, editProfileHandler } = require('./manage-user/handler');
const httpUtil = require('./util/httpUtil');
const { authFilterMiddleware } = require('./security/authFilterMiddleware');

const app = express();
app.use(json());
app.use(helmet());

app.get('/', authFilterMiddleware, (_, res) => {
  res.json({
    msg: 'Hello World',
  });
});

// Login and register
app.post('/api/register', registerHandler);
app.post('/api/login', loginHandler);
app.put('/api/profile/update', editProfileHandler);

app.all('*', (req, res) => {
  res.json(httpUtil.getNotFound());
});

module.exports = { app };

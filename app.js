const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const app = express();

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '6289e136eb63a66c427fd42f',
  };
  next();
});
app.use('/', require('./routes/users'));
app.use('/', require('./routes/cards'));

app.use('*', (_, res) => res.status(404).send({ message: 'net' }));

mongoose.connect('mongodb://localhost:27017/mestodb');

app.listen(PORT);

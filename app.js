import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

//const express = require('express');
//const morgan = require('morgan');
//const cors = require('cors');
//Para acceder al directorio actual
//const path = require('path');

const app = express();

//Conexion a DB
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/myapp';
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};
// Or using promises
mongoose.connect(uri, options).then(
  () => {
    console.log('Conectado a Mongo DB');
  },
  err => {
    err;
  }
);

//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true
  })
);

//Rutas
/* app.get('/', function (req, res) {
  res.send('Hello World !');
});
 */

//Configuracion global de rutas
app.use('/api', require('./routes/nota'))

//Middleware para vuejs router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log('Escuchando el puerto: ', app.get('puerto'));
});
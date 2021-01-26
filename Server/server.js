const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'Public', 'dist');
const app = express();

app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

app.use('/bundle', router.bundle);

app.use('/api', router.api);

module.exports = app;

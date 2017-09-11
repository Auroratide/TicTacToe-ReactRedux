const path = require('path');
const express = require('express');
const ejs = require('ejs').renderFile;
const app = express();
const api = require('./api');
const mw = require('./middleware');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejs);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/', mw.doIf(mw.isJson, api), mw.render);
app.get('*', mw.render);

app.listen(3000, function() {
  console.log('Listening on 3000');
});

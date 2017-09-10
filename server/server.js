const path = require('path');
const express = require('express');
const ejs = require('ejs').renderFile;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejs);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/', function(req, res) {
  return res.render('index', {});
});

app.listen(3000, function() {
  console.log('Listening on 3000');
});

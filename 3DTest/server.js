const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const engines = require('consolidate');

app.use(express.static('./static'));
app.use(express.static('./Cesium'));
app.use(express.static('./'));
app.set('views', path.join(__dirname, 'static/tpl'));
app.engine('html', engines.hogan);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  // res.end('data from server');
   res.render('index.html');
});

app.listen(3000, () => {
   console.log('express is running');
});
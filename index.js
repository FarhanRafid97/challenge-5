const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    nama: 'farhan',
    msg: 'keep trying and outsmart everyone',
  });
});
app.get('/greet', (req, res) => {
  const nama = req.query.nama || 'NULL';
  res.render('index', { nama, title: 'greeting' });
});
app.get('/register', (req, res) => {
  const nama = req.query.nama || 'NULL';
  res.render('register', { nama, title: 'greeting' });
});
const port = 8000;
app.listen(port, () => console.log(`port berjalan ${port}`));

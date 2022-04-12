import express from 'express';
const app = express();
import router from './routes/Router.js';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

const port = 8000;
app.listen(port, () => console.log(`port berjalan ${port}`));

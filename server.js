const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/router');
const ejs = require('ejs');
const bodyParser = require('body-parser');
require('dotenv').config();


app.set('view engine', 'ejs');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

app.listen(process.env.PORT, () => console.log(`the server is up at port ${process.env.PORT}`));

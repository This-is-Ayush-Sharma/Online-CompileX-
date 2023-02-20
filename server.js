const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/router');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/',routes);

app.listen(process.env.PORT,() => console.log(`the server is up at port ${process.env.PORT}`));

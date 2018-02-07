const express = require('express');
const path = require('path');
// const routes = require('./routes')
const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();
const bodyParser = require('body-parser');

app.use(express.static('server/public'));


app.listen(port, () => {
    console.log(`server running on ${port}`);
});
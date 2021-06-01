const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const TodoRouter = require('./todo/router/TodoRouter');
app.use(TodoRouter);

app.listen(3000);

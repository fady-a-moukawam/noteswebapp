const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');

const notesRoute = require('./routes/notes');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(logger('dev'));
app.use(cookieParser())

app.use("/api/v1/notes", notesRoute);

// not found route throw 404
app.use((req, res, next) => {
    next(createError(404))
})

app.listen(process.env.SERVER_PORT, () => console.log('Server is running on port 5000'));

module.exports = app;

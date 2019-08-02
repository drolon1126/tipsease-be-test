////============ DEPENDENCIES ============/////////

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const server = express();

////============ MIDDLEWARE ============/////////

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('short'));

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

////============ ROUTES ============/////////

/// tippers, tippees, auth, register routes necessary
server.get('/', (req, res) => {
  res.json('All good here! Keep up the development!');
});

tippersRouter = require('./routes/tippersRouter');
tippeesRouter = require('./routes/tippeesRouter');
authRouter = require('./routes/authRouter');
// we will need an auth route in the future

server.use('/api/tippers', tippersRouter);
server.use('/api/tippees', tippeesRouter);
server.use('/api', authRouter);

module.exports = server;

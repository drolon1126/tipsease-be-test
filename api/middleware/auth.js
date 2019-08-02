require('dotenv').config();

const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET;
// implementation details

/// guess i need a token here lol

function makeToken(user) {
  //// i wonder if this will conflict with the above information!
  const payload = {
    id: user.id,
    email: user.email
  };
  const options = {
    expiresIn: '48h'
  };
  return jwt.sign(payload, jwtKey, options);
}

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) {
        res
          .status(401)
          .json({ errorMsg: err, message: 'Invalid Token, get another one!' });
      }

      {
        req.decoded = decoded;

        next();
      }
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
}

module.exports = {
  makeToken,
  authenticate
};

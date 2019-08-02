/////============ DEPENDENCIES ============/////////

const express = require('express');
const bcrypt = require('bcryptjs');
const auth = require('../../api/middleware/auth');

const router = express.Router();
const jwt = require('jsonwebtoken');
const imageParser = require('../../config/cloudinary');
const db = require('../../helpers/dbTippersHelpers');
/////============ ROUTES ============/////////

router.get('/', (req, res) => {
  db.getTippers()
    .then(tippers => res.status(200).send(tippers))
    .catch(err => next(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.getByTipperId(id)
    .then(tipper => res.status(200).json(tipper))
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;

  db.updateTipper(id, data)
    .then(data => {
      if (data === 0) {
        //if nothing gets returned
        res.status(404).json({ errorMsg: 'Sorry, that user does not exist!' });
      }
      {
        db.getByTipperId(id).then(tipper => {
          res.status(200).json(tipper);
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        err,
        message:
          'Not sure, but are you sure you put in a unique email? Try that first!'
      });
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db.removeTipper(id)
    .then(response => {
      if (response === 1) {
        res.status(200).json({ message: 'Well done!' });
      } else {
        res.status(404).json({
          message:
            "Yo, check yoself befo' u wrek urself - That tipper doesn't exist."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        err,
        message: 'Not sure m8, but something went wrong. Try again?'
      });
    });
});

module.exports = router;

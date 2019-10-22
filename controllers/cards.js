const { check, validationResult } = require('express-validator');
const luhn = require('luhn');

const cardsDB = require('../config/db');

const validateCardNumber = value => {
  const is_valid = luhn.validate(value);

  if (is_valid) {
    return Promise.resolve();
  }
  return Promise.reject('Invalid card number');
};

/**
 * Check if the card number already exists
 * @param {*} value
 */
const validateCardNumberExists = value => {
  return new Promise((resolve, reject) => {
    cardsDB.find({ cardNumber: value }, (err, docs) => {
      if (docs.length !== 0) {
        return reject('Card number already exists');
      } else {
        return resolve();
      }
    });
  });
};

/**
 * Card number validations
 * @param {*} method
 */
const validate = method => {
  switch (method) {
    case 'createCard': {
      return [
        check('cardNumber', 'Card number is required').exists(),
        check('cardNumber').custom(validateCardNumber),
        check('cardNumber').custom(validateCardNumberExists),
        check('name', 'Name is required').exists(),
        check('limit', 'Card limit is required').exists(),
        check('limit', 'Card limit should be a number').isNumeric()
      ];
    }
  }
};

/**
 * Inserting new card number
 * @param {*} req
 * @param {*} res
 */
const createCard = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  cardsDB.insert(req.body, (err, newCard) => {
    res.json(newCard);
  });
};

const getCards = (req, res) => {
  // Find all documents in the collection
  cardsDB.find({}, function(err, docs) {
    console.log(docs);
    res.json(docs);
  });
};

module.exports = {
  validate,
  createCard,
  getCards
};

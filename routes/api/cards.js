const express = require('express');
const cardController = require('../../controllers/cards');

const router = express.Router();

// @route  GET api/cards
// @desc   retreiving all cards
// @access Public
router.get('/', cardController.getCards);

// @route  POST api/cards
// @desc   add new card
// @access Public
router.post(
  '/',
  cardController.validate('createCard'),
  cardController.createCard
);

module.exports = router;

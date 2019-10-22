const Datastore = require('nedb');

const cardsDB = new Datastore({ filename: 'cards.db', autoload: true });

module.exports = cardsDB;

/* eslint-disable arrow-parens */
const mongoose = require('mongoose');
const Card = require('../models/card');

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const cardId = req.user._id;

  Card.create({ name, link, owner: cardId })
    .then(card => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getCards = (req, res) => {
  Card.find({})
    .then(cards => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

// eslint-disable-next-line consistent-return
module.exports.delCardId = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.cardId)) {
    return res.status(404).send({ message: 'not found card' });
  }

  Card.findByIdAndRemove(req.params.cardId)
    .populate('owner')
    .then(card => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

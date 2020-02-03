const router = require('express').Router();
const { createCard, getCards, delCardId } = require('../controllers/cards');

router.post('/cards', createCard);
router.get('/cards', getCards);
router.get('/cards/:cardId', delCardId);

module.exports = router;

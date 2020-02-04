const router = require('express').Router();
const { createCard, getCards, delCardId } = require('../controllers/cards');

router.post('/cards', createCard);
router.get('/cards', getCards);
router.delete('/cards/:cardId', delCardId);

module.exports = router;

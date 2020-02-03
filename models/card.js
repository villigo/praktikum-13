const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: [],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

cardSchema.path('link').validate((val) => {
  // eslint-disable-next-line no-useless-escape
  const url = /^(?:(?:https?):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:([a-z0-9][a-z0-9\-])?([a-z\-]{2,}|\d{1,3}))(?:\.(?:[a-z0-9\-])*[a-z0-9])*(?:\.(?:([a-z0-9]{2,}|\d{1,3})#?)(:\d{1,5})?))(?:\/[^\s]*)?$/;
  return url.test(val);
}, 'Invalid card URL.');

// создаём модель и экспортируем её
module.exports = mongoose.model('card', cardSchema);

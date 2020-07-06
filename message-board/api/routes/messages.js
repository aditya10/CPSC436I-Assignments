var express = require('express');
var router = express.Router();
var Message = require('../models/message-model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Message.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
  const id = Number(req.body.id);
  const text = req.body.text;
  const isWarning = Boolean(req.body.isWarning);
  const date = req.body.date;

  const newMessage = new Message({
    id,
    text,
    isWarning,
    date,
  });

  newMessage.save()
  .then(() => res.json('Message added'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
  Message.find({id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/clear', (req, res) => {
  Message.deleteMany()
  .then(message => res.json(message))
  .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;

var express = require('express');
var router = express.Router();
var Message = require('../models/message-model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Message.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', (req, res) => {
  const text = req.body.text;
  const isWarning = Boolean(req.body.isWarning);
  const date = req.body.date;

  const newMessage = new Message({
    text,
    isWarning,
    date,
  });

  newMessage.save()
  .then(val => res.json(val))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
  Message.find({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/:id', (req, res) => {
  Message.findByIdAndUpdate({_id: req.params.id}, {"text": req.body.text})
    .then(message => res.json(message))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
  Message.deleteOne({_id: req.params.id})
    .then(() => res.status(204).json("Successfully deleted message"))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/', (req, res) => {
  Message.deleteMany()
  .then(() => res.status(204).json("Successfully deleted all messages"))
  .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    id: {type: Number, unique: true},
    text: {type: String},
    isWarning: {type: Boolean},
    date: {type: String}
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message; 
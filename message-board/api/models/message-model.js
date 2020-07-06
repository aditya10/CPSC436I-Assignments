const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: {type: String},
    isWarning: {type: Boolean},
    date: {type: String}
}, {versionKey: false, autoIndex: true});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message; 
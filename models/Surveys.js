const mongoose = require('mongoose');
const recipientSchema = require('./Recipient');

const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [recipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
});

mongoose.model('surveys', surveySchema);

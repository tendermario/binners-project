const mongoose = require('mongoose');
const User = require('../models/User');

const Schema = mongoose.Schema;

const requestSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  address: String,
  date: String,
  time: String,
  type: String,
  amount: String,
  note: String,
  recurring: String,
  assigned_to: String,
}, { timestamps: true });

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;

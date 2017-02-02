const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  user_id: String,
  name: String,
  email: String,
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

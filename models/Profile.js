const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  bloodGlucose: {
    type: Number,
    date: Date
  },
  bodyWeight: {
    type: Number,
    date: Date
  },
  bloodPressure: {
    type: Number,
    date: Date
  },
  journalEntry: [
    {
      body: String
    }
  ],
  systolic: {
    type: Number,
    date: Date
  },
  diastolic: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);

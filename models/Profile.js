const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  bloodGlucose: [
    {
      type: Number,
      date: Date
    }
  ],
  bodyWeight: [
    {
      type: Number,
      date: Date
    }
  ],
  journalEntry: [
    {
      body: String
    }
  ],
  bloodPressure: [
    {
      systolic: {
        type: Number
      },
      diastolic: {
        type: Number
      },
      date: {
        type: Date
      }
    }
  ]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);

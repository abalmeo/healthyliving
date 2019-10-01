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
        type: Number,
        required: true
      },
      diastolic: {
        type: Number,
        required: true
      },
      date: {
        type: Date
      }
    }
  ]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);

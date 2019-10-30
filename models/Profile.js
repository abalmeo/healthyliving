const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  bloodGlucose: [
    {
      value: {
        type: Number
      },
      date: {
        type: Date
      }
    }
  ],
  bodyWeight: [
    {
      value: {
        type: Number
      },
      date: {
        type: Date
      }
    }
  ],
  journalEntry: [
    {
      title: {
        type: String
      },
      body: {
        type: String
      },
      date: {
        type: Date
      }
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

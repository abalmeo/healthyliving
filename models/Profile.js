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
      systolic: [
        {
          value: {
            type: Number,
            required: true
          },
          date: {
            type: Date
          }
        }
      ],
      diastolic: [
        {
          value: {
            type: Number
          },
          date: {
            type: Date
          }
        }
      ]
    }
  ]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);

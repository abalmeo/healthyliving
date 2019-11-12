const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// route POST @api/post
// Post to profile
// Private

// TODO: Add validation for incoming data
router.post('/', [auth], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if a profile exists for user
    const profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      for (let formKey in req.body) {
        if (!['date', 'systolic', 'diastolic'].includes(formKey)) {
          profile[formKey].push({
            date: req.body.date,
            value: req.body[formKey]
          });

          profile[formKey].sort((field1, field2) => {
            return field1.date - field2.date;
          });
        }
      }

      if (req.body.systolic && req.body.diastolic) {
        profile.bloodPressure.push({
          systolic: req.body.systolic,
          diastolic: req.body.diastolic,
          date: req.body.date
        });

        profile.bloodPressure.sort((field1, field2) => {
          return field1.date - field2.date;
        });
      }

      await profile.save();
      return res.json(profile);
    }

    // Else create a new profile for user
    const profileFields = {};
    profileFields.user = req.user.id;
    for (let formKey in req.body) {
      if (!['date', 'systolic', 'diastolic'].includes(formKey)) {
        profileFields[formKey] = [
          {
            date: req.body.date,
            value: req.body[formKey]
          }
        ];
      }
    }

    if (req.body.systolic && req.body.diastolic) {
      profileFields.bloodPressure = [
        {
          systolic: req.body.systolic,
          diastolic: req.body.diastolic,
          date: req.body.date
        }
      ];
    }

    const newProfile = new Profile(profileFields);

    await newProfile.save();

    res.json(newProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// route POST @api/post
// Post journal entries
// Private

router.post(
  '/journal',
  [
    auth,
    [
      check('title', 'Title is required')
        .not()
        .isEmpty()
        .isLength({ min: 1 }),
      check('body', 'Body is required')
        .not()
        .isEmpty()
        .isLength({ min: 1 }),
      check('date', 'Date is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if profile exists for user
      const profile = await Profile.findOne({
        user: req.user.id
      });

      if (profile) {
        profile.journalEntry.push({
          title: req.body.title,
          body: req.body.body,
          date: req.body.date.substring(0, 10)
        });

        // Sort entries in descending order from most recent to oldest date
        let sortedEntries = profile.journalEntry.sort((field1, field2) => {
          return field2.date - field1.date;
        });

        profile.journalEntry = sortedEntries;
        await profile.save();
        return res.json(profile.journalEntry);
      }

      // Create a new profile if profile doesn't already exist
      const profileFields = {};
      profileFields.user = req.user.id;

      // Create profile and add new journal entry
      if (req.body) profileFields.journalEntry = req.body;
      const newProfile = new Profile(profileFields);
      await newProfile.save();

      res.json(newProfile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

router.get('/', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      'name'
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send;
  }
});

module.exports = router;

const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// route GET @api/post
// Create a post
// Private

router.post('/', [auth], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // console.log('req.body', req.body);
  const { bloodGlucose, bodyWeight, bloodPressure, journalEntry } = req.body;

  try {
    // Check if a profile exists for user
    const profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      console.log('profile', profile);
      const profile = await Profile.findById(req.params.id);
      if (bloodGlucose) {
        profile.bloodGlucose.unshift(bloodGlucose);
      }
      if (bodyWeight) {
        profile.bodyWeight.unshift(bodyWeight);
      }
      if (bloodPressure) {
        profile.bloodPressure.unshift(bloodPressure);
      }
      if (journalEntry) {
        profile.journalEntry.unshift(journalEntry);
      }

      await profile.save();
    }

    // Else create a new profile for user
    const profileFields = {};
    profileFields.user = req.user.id;
    if (bloodGlucose) profileFields.bloodGlucose = bloodGlucose;
    if (bodyWeight) profileFields.bodyWeight = bodyWeight;
    if (bloodPressure) profileFields.bloodPressure = bloodPressure;
    if (journalEntry) profileFields.journalEntry = journalEntry;
    console.log('profileFields', profileFields);
    const newProfile = new Profile(profileFields);
    console.log('newProfile', newProfile);

    await newProfile.save();

    res.json(newProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//route      GET @api/profile/me
//@desc      Get current users profile
//@access    Public
router.get('/me', auth, async (req, res) => {
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

// router.post(
//   '/journal/:id',
//   [
//     auth,
//     [
//       check('text', 'Text is required')
//         .not()
//         .isEmpty()
//     ]
//   ],

//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       const user = await User.findByIdAndUpdate(req.user.id).select(
//         '-password'
//       );

//       const post = await Profile.findById(req.params.id);

//       const entry = post.entries.find();
//     } catch (err) {}
//   }
// );

module.exports = router;

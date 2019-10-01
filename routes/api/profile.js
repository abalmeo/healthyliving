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

router.post(
  '/',
  // [
  //   auth,
  //   [
  //     check('test', 'Text is required')
  //       .not()
  //       .isEmpty()
  //   ]
  // ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findOne({ user: req.user.id }).select(
        '-password'
      );

      const { bloodGlucose, bodyWeight, bloodPressure, date } = req.body;
      const profileFields = {};

      if (bloodGlucose) profileFields.bloodGlucose = bloodGlucose;
      if (bodyWeight) profileFields.bodyWeight = bodyWeight;
      if (bloodPressure) profileFields.bloodPressure = bloodPressure;

      try {
        let profile = await Profile.findOne({
          user: req.user.id
        });

        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
      } catch (err) {}

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

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

const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose'); 
const passport = require('passport'); 

//load validation
const validateProfileInput = require('../../validation/profile')

//load profile model
const Profile = require('../../models/Profile');
//load  profile
const User = require('../../models/User');


//GET api/posts/test
//Tests post route
//Public route
router.get('/test', (req, res) => res.json({msg: "Profile Works"})); 

//GET api/profile
//Get current users profile
//Private route
router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        //Get fields 
      const errors = {}; 
  
      Profile.findOne({ user: req.user.id })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
          if (!profile) {
            errors.noprofile = 'There is no profile for this user';
            return res.status(404).json(errors);
          }
          res.json(profile);
        })
        .catch(err => res.status(404).json(err));
    }
  );


  router.post('inputBodyweight',
passport.authenticate('jwt', {session: false}),
(req, res) => {
    const errors = {};
    
    let bodyWeight = {}; 
    bodyWeights = req.body.bodyweight; 
    Profile.findOne({email:req.body.email})
        .then(profile => {
            if(profile){
            Profile.findOneAndUpdate(
                {email: req.body.email},
                {$push: {
                    bodyweight:{
                        $each: [{date:req.body.date,bodyweight:req.body.bodyweight}]
                    }
                }}
            )}
        })


})


router.post('inputBloodGlucose',
passport.authenticate('jwt', {session: false}),
(req, res) => {
    const errors = {};
    
    let bloodGlucose = {}; 
    bloodGlucose = req.body.bloodGlucose; 
    Profile.findOne({email:req.body.email})
        .then(profile => {
            if(profile){
            Profile.findOneAndUpdate(
                {email: req.body.email},
                {$push: {
                    bloodGlucose:{
                        $each: [{date:req.body.date,
                                 bloodGlucose:req.body.bloodGlucose
                                }]
                    }
                }}
            )}
        })
})


router.post('inputBloodGlucose',
passport.authenticate('jwt', {session: false}),
(req, res) => {
    const errors = {};
    
    let bloodGlucose = {}; 
    bloodGlucose = req.body.bloodGlucose; 
    Profile.findOne({email:req.body.email})
        .then(profile => {
            if(profile){
            Profile.findOneAndUpdate(
                {email: req.body.email},
                {$push: {
                    bloodGlucose:{
                        $each: [{date:req.body.date,
                                 bloodGlucose:req.body.bloodGlucose
                                }]
                    }
                }}
            )}
        })


})
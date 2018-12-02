const express = require('express'); 
const router = express.Router(); 
const bcrypt = require('bcryptjs'); 
const jwt  = require('jsonwebtoken');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

const User = require('../../models/User'); 

router.post('/register',(req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body); 
    User.findOne({email:req.body.email})
        .populate("profile")
})
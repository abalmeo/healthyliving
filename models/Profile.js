const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const ProfileSchema = new Schema({
    date: {
        type: String, 
    }, 
    bloodPressure: [{
        systolic: Number,
        diastolic: Number,
        date: Date
    }],
    bodyWeight: [{
        weight: Number, 
        date: Date
    }],
    bloodGlucose: [{
        bg: Number, 
        date: Date
    }],
    journal: [{
        title: String,
        entry: String,
        date: Date, 
    }]


})



module.exports = User = mongoose.model('profile', ProfileSchema);


const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
    date: {
        type: String, 
    }, 
    bloodPressure: {
        type: String, 
        required: true,
    },
    bodyWeight: {
        type: String, 
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }


})

UserSchema.virtual('profile', {
    ref: 'profile', 
    localField: 'user',
    foreighnFielld: "id",
    justOne: true
})

module.exports = User = mongoose.model('users', UserSchema);


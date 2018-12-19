const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
    name: {
        type: String, 
        required: true
    }, 
    username: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
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
    foreignField: "id",
    justOne: true
})

module.exports = User = mongoose.model('users', UserSchema);


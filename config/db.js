const mongoose = require('mongoose');
const config = require('config');
let db;

if (config.get('useLocalDb') === false) {
  db = config.get('mongoURI');
} else {
  db = 'mongodb://127.0.0.1:27017/healthy-living';
}

//mongoose connect returns promise
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

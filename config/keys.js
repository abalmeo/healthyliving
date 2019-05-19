/*if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
  } else {
    module.exports = require('./keys_dev');
  }
  */

  module.exports = {
    mongoURI: 'mongodb://abalmeo:123456a@ds111562.mlab.com:11562/healthyliving',
    secretOrKey:'secret'
};
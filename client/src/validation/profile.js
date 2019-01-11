const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};
  console.log(data); 

  data.bloodPressure = !isEmpty(data.bloodPressure) ? data.bloodPressure : '';
  data.weight = !isEmpty(data.weight) ? data.weight : '';
  data.bloodSugar = !isEmpty(data.bloodSugar) ? data.bloodSugar : '';

  if (!Validator.isLength(data.userName, { min: 2, max: 40 })) {
        errors.userName = 'Username should be between 2 and 4 characters long';
  }

  if (Validator.isEmpty(data.bloodPressure)) {
    errors.bloodPressure = 'Blood pressure is required';
  }

  if (Validator.isEmpty(data.weight)) {
    errors.weight = 'Weight is required';
  }

  if (Validator.isEmpty(data.bloodSugar)) {
    errors.bloodSugar = 'Blood sugar is required';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};

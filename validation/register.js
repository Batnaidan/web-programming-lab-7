const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.userId = !isEmpty(data.userId) ? data.userId : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  data.name = !isEmpty(data.name) ? data.name : '';
  data.phoneNo = !isEmpty(data.phoneNo) ? data.phoneNo : '';

  if (!data.userId) {
    errors.userId = 'UserId field is required';
  } else if (data.userId.lenght >= 30) {
    errors.userId = 'Userid must be between 1 and 30 characters';
  }
  if (!data.email) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (!data.password) errors.password = 'Password field is required';

  if (!data.password2) errors.password2 = 'Confirm password field is required';

  if (data.password.length <= 6)
    errors.password = 'Password must be at least 6 characters';

  if (data.password !== data.password2)
    errors.password2 = 'Passwords must match';

  if (!data.name) errors.name = 'Name field is required';

  if (!Validator.isMobilePhone(data.phoneNo))
    errors.phoneNo = 'PhoneNo is invalid';

  return {
    errors,
    validation: isEmpty(errors),
  };
};

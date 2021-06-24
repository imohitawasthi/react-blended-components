'use strict'

// Object.defineProperty(exports, '__esModule', {
//   value: true
// })

var checkDate = function checkDate(value) {
  return value && /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/.test(value)
    ? undefined
    : 'Invalid date'
}

var checkEmail = function checkEmail(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
}

var checkIndianNumber = function checkIndianNumber(value) {
  return value &&
    !/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/g.test(value)
    ? 'Expected format: (0/+91XXXXXXXXXX) or (6/7/8/9XXXXXXXXX)'
    : undefined
}

var checkFloat = function checkFloat(value) {
  return (value && Number(value) === parseFloat(value)) ||
    (value !== '' && Number(value) === 0)
    ? undefined
    : 'Value should be a float'
}

var checkOrganizationName = function checkOrganizationName(value) {
  return value === undefined ||
    value.trim() === '' ||
    !/^[a-zA-Z0-9\s&.,'_-]{2,}$/.test(value)
    ? "Field Must Contain Only Alphanumeric Characters, (&.,'_-), Spaces and at least two characters"
    : undefined
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

var checkNumeric = function checkNumeric(value) {
  return value && isNumeric(value) ? undefined : 'Value should be numeric'
}

var checkNumber = function checkNumber(value) {
  return (value && Number(value) === parseInt(value, 10)) ||
    (value !== '' && Number(value) === 0)
    ? undefined
    : 'Value should be an integer'
}

var checkPassword = function checkPassword(value) {
  return /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).*$/.test(value)
    ? undefined
    : 'Password must contain at least 1 upper and lower case letter, one number or special character and be at least 8 characters.'
}

var checkPhone = function checkPhone(value) {
  return value && !/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/im.test(value)
    ? 'Invalid phone number'
    : undefined
}

var checkSelect = function checkSelect(value, select) {
  return JSON.stringify(value) && JSON.stringify(value) !== '[]'
    ? undefined
    : 'Field Is Required'
}

var checkString = function checkString(value) {
  return value && !/^[a-zA-Z\s]+$/.test(value)
    ? 'Field Must Contain Only Alphabets and Spaces'
    : undefined
}

var maxLength = function maxLength(max) {
  return function (value) {
    return value && value.length > max
      ? 'Must be ' + max + ' characters or less'
      : undefined
  }
}

var maxValue = function maxValue(max, message) {
  return function (value) {
    return value && parseInt(value) && parseInt(value) > max
      ? message || 'Must be less then ' + max
      : undefined
  }
}

var minValue = function minValue(min, message) {
  return function (value) {
    return value && parseInt(value) && parseInt(value) < min
      ? message || 'Must be more then ' + min
      : undefined
  }
}

var required = function required(value) {
  return value ? undefined : '*Field Is Required'
}

var validateCheckbox = function validateCheckbox(value) {
  return value && value.length > 0
    ? undefined
    : 'Please check one of the checkboxes'
}

var validateLinkUrl = function validateLinkUrl(value) {
  return value && !/^https*:\/\/[a-z0-9./?=%'()*&@+!`#$_-]+/i.test(value)
    ? 'Field must contain a url'
    : undefined
}

var checkPersonName = function checkPersonName(value) {
  return value && !/^[a-zA-Z\s&.,'_-]{2,}$/.test(value)
    ? "Field Must Contain Only Alphabets, (&.,'_-), Spaces and at least two characters"
    : undefined
}

var checkGender = function checkGender(value, array) {
  const genderArray = array || ['MALE', 'FEMALE', 'OTHER']

  return value && genderArray.includes(value.toUpperCase())
    ? undefined
    : "Invalid Gender"
}

export default {
  checkDate: checkDate,
  checkEmail: checkEmail,
  checkIndianNumber: checkIndianNumber,
  checkFloat: checkFloat,
  checkOrganizationName: checkOrganizationName,
  checkNumber: checkNumber,
  checkPassword: checkPassword,
  checkPhone: checkPhone,
  checkSelect: checkSelect,
  checkString: checkString,
  maxLength: maxLength,
  required: required,
  validateCheckbox: validateCheckbox,
  validateLinkUrl: validateLinkUrl,
  checkPersonName: checkPersonName,
  maxValue: maxValue,
  minValue: minValue,
  checkNumeric: checkNumeric,
  checkGender: checkGender
}

const TWO_WORDS_REG_EXP = /^[a-zA-Z]+ [a-zA-Z]+$/;

// valid: 371111111111111111
const CARD_NUMBER_REG_EXP = /^(?:3[47][0-9]{16})$/;

const getErrorMsg = (validators, val) =>
  validators.reduce((acc, validator) =>
    acc ?
    acc :
      validator.validate(val)
        ? ''
        : validator.msg, '');

export const isEmpty = {
  validate: v => Boolean(v),
  msg: 'Input cannot be clear'
};

export const lessThan3 = {
  validate: v => v >= 3,
  msg: 'Incorrect value'
};

export const twoWords = {
  validate: v => TWO_WORDS_REG_EXP.test(v),
  msg: 'Incorrect value'
};

export const cardNumber = {
  validate: v => CARD_NUMBER_REG_EXP.test(v),
  msg: 'Please enter your 16 digit credit card numbers'
};

export const validateAndSetError = (setErr, validators) => e =>
  setErr(getErrorMsg(validators, e.target.value));

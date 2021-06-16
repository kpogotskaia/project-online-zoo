const INPUT_SELECTOR = '.input-section input';
const FOCUS_OR_NOT_EMPTY_CLASS = 'is-focused';
const INVALID_CLASS = 'is-invalid';

const inputs = [...document.querySelectorAll(INPUT_SELECTOR)];

console.dir(inputs[0].dataset);

const addClass = className => el => el.classList.add(className);
const removeClass = className => el => el.classList.remove(className);

const isEmpty = v => !v;

const minChars = minInclusive => v => v.length >= minInclusive;

const commonValidations = [isEmpty, minChars(3)];

const inputFocusHandler = e => {
  addClass(FOCUS_OR_NOT_EMPTY_CLASS)(e.target);
};

const inputBlurHandler = e => {
  if (!e.target.value) {
    removeClass(FOCUS_OR_NOT_EMPTY_CLASS)(e.target);
  }
};

const inputInputHandler = e => {
  console.log(e.target.value);
};

inputs.forEach(input => {
  input.addEventListener('focus', inputFocusHandler);
  input.addEventListener('blur', inputBlurHandler);
  input.addEventListener('input', inputInputHandler);
});

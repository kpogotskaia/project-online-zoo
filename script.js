//------------- constants -------------
const INPUT_SELECTOR = '.input-section input';
const FOCUS_OR_NOT_EMPTY_CLASS = 'is-focused';
const INVALID_CLASS = 'is-invalid';
const HIDDEN_SCROLL = 'hidden-scroll';
const IS_HIDDEN = 'is-hidden';
const DONATION_POPUP_BUTTON_OPEN = '.donation-popup-button';
const DONATION_POPUP_BUTTON_CLOSE = '.donation-popup__close';
const DONATION_POPUP = '.donation-popup';

//------------- utils -------------
const addClass = className => el => el.classList.add(className);
const removeClass = className => el => el.classList.remove(className);

//------------- validators -------------
const isEmpty = v => !v;

const minChars = minInclusive => v => v.length >= minInclusive;

const commonValidations = [isEmpty, minChars(3)];

//------------- handlers -------------
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

const addOpenPopupListener = () => {
  const btn = document.querySelector(DONATION_POPUP_BUTTON_OPEN);
  const popup = document.querySelector(DONATION_POPUP);

  btn.addEventListener('click', () => {
    removeClass(IS_HIDDEN)(popup);
    addClass(HIDDEN_SCROLL)(document.body);
  });
};

const addClosePopupListener = () => {

};

//------------- main -------------
addOpenPopupListener();
const inputs = [...document.querySelectorAll(INPUT_SELECTOR)];

console.dir(inputs[0].dataset);

inputs.forEach(input => {
  input.addEventListener('focus', inputFocusHandler);
  input.addEventListener('blur', inputBlurHandler);
  input.addEventListener('input', inputInputHandler);
});

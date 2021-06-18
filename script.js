//------------- constants -------------
const INPUT_SELECTOR = '.input-section input';
const FOCUS_OR_NOT_EMPTY_CLASS = 'is-focused';
const IS_INVALID = 'is-invalid';
const HIDDEN_SCROLL = 'hidden-scroll';
const IS_HIDDEN = 'is-hidden';
const DONATION_POPUP_BUTTON_OPEN = '.donation-popup-button';
const DONATION_POPUP_BUTTON_CLOSE = '.js-donation-popup-close';
const ERROR_MESSAGE = '.js-error-message';
const DONATION_POPUP = '.donation-popup';

//------------- utils -------------
const addClass = className => el => el.classList.add(className);
const removeClass = className => el => el.classList.remove(className);
const setText = txt => el => el.innerHTML = txt;

//------------- validators -------------
const isEmpty = v => v
  ? ''
  : 'Error: value shoudnt be empty';

const minChars = minInclusive => v => v.length >= minInclusive
  ? ''
  : `Error: value should be more than ${minInclusive} characters`;

const getErrorMessageEl = parent => parent.querySelector(ERROR_MESSAGE);

const showError = (parent, msg) => {
  const $errorMessage = getErrorMessageEl(parent);
  addClass(IS_INVALID)(parent);
  removeClass(IS_HIDDEN)($errorMessage);
  setText(msg)($errorMessage);
};

const hideError = (parent, msg) => {
  const $errorMessage = getErrorMessageEl(parent);
  removeClass(IS_INVALID)(parent);
  addClass(IS_HIDDEN)($errorMessage);
  setText(msg)($errorMessage);
};

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
  const minLength = e.target.dataset.minLength || 0;
  const validators = [isEmpty, minChars(minLength)];
  const errorMessage = validators.reduce(
    (msg, validator) => msg ? msg : validator(e.target.value),
    ''
  );

  if (errorMessage) {
    showError(e.target.parentNode, errorMessage);
  } else {
    hideError(e.target.parentNode, errorMessage)
  }
};

const addOpenPopupListener = ($openBtn, $popup) => {
  $openBtn.addEventListener('click', () => {
    removeClass(IS_HIDDEN)($popup);
    addClass(HIDDEN_SCROLL)(document.body);
  });
};

const addClosePopupListener = ($closeBtn, $popup) => {
  $closeBtn.addEventListener('click', () => {
    addClass(IS_HIDDEN)($popup);
    removeClass(HIDDEN_SCROLL)(document.body);
  });
};

//------------- main -------------
const $openBtn = document.querySelector(DONATION_POPUP_BUTTON_OPEN);
const $popup = document.querySelector(DONATION_POPUP);
const $closeBtn = document.querySelector(DONATION_POPUP_BUTTON_CLOSE);

addOpenPopupListener($openBtn, $popup);
addClosePopupListener($closeBtn, $popup);

const inputs = [...document.querySelectorAll(INPUT_SELECTOR)];

inputs.forEach(input => {
  input.addEventListener('focus', inputFocusHandler);
  input.addEventListener('blur', inputBlurHandler);
  input.addEventListener('input', inputInputHandler);
});

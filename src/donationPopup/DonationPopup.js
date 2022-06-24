import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { validateAndSetError, isEmpty, lessThan3, twoWords, cardNumber, exprCardDate, moreThan3 } from '../validation';

import './style.scss';

export const DonationPopup = (props) => {
  const [isClosing, setIsClosing] = useState(false);

  const closeHandler = e => {
    setIsClosing(props.isOpened);
    props.close(e);
  };

  const [setChooseAnimal] = useState('panda');
  const [toDonate, setToDonate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumberValue, setCardNumberValue] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const [toDonateError, setToDonateError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');
  const [cvcError, setCvcError] = useState('');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      toDonateError ||
      nameError ||
      cardNumberError ||
      emailError ||
      expiryDateError ||
      phoneError ||
      cvcError
    ) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [
    toDonateError,
    nameError,
    cardNumberError,
    emailError,
    expiryDateError,
    phoneError,
    cvcError
  ]);


  return (
    <>
      <div
        className={classNames('donation-popup__background-listener')}
        onClick={closeHandler}
      ></div>
      <div className={classNames('donation-popup',{
        'donation-popup--closing': isClosing
      })}>
        <div className={classNames("donation-popup__wrapper")}>
          <div className={('donation-popup__img')}></div>

            <form className={classNames('donation-form')}>
              <h3 className={classNames('heading')}>Donate for your animal</h3>
              <fieldset className={classNames('donation-form__choose')}>

                {/* choose animal dropdown */}
                <label className={classNames('input-section')}>
                  <span className={classNames('input-section__message')}>Choose an animal</span>
                  <select
                    className={classNames('drop-list')}
                    onChange={e => setChooseAnimal(e.target.value)}
                  >
                    <option value={"panda"}>panda</option>
                    <option value={"elephant"}>elephant</option>
                    <option value={"tiger"}>tiger</option>
                    <option value={"eagle"}>eagle</option>
                    <option value={"monkey"}>monkey</option>
                  </select>
                </label>

                {/* to donate input */}
                <label className={classNames('input-section')}>
                  <span className={classNames('input-section__message')}>To donate</span>
                  {toDonateError &&
                    <span className={classNames('input-section__error-message')}>
                      {toDonateError}
                    </span>
                  }
                  <input
                    type="number"
                    value={toDonate}
                    onChange={e => setToDonate(e.target.value)}
                    onBlur={validateAndSetError(setToDonateError, [isEmpty, lessThan3])}
                  />
                </label>

              </fieldset>

              <div className={classNames('donation-form__about')}>
                <fieldset>
                  <legend>About you</legend>

                  {/* name input field */}
                  <label className={classNames('input-section')}>
                    <span className={classNames('input-section__message')}>Name</span>
                    {nameError &&
                      <span className={classNames('input-section__error-message', {
                        'valid-input': formValid
                      })}>
                        {nameError}
                      </span>
                    }
                    <input
                      onChange={e => setName(e.target.value)}
                      value={name}
                      onBlur={validateAndSetError(setNameError, [isEmpty, twoWords])}
                      type="text"
                    />
                  </label>

                  {/* email input field */}
                  <label className={classNames('input-section')}>
                    <span className={classNames('input-section__message')}>Email</span>
                    {emailError &&
                      <span className={classNames('input-section__error-message')}>
                        {emailError}
                      </span>
                    }
                    <input
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      onBlur={e => validateAndSetError(setEmailError, [isEmpty, email])}
                      type="email"
                    />
                  </label>

                  {/* phone input field */}
                  <label className={classNames('input-section')}>
                    <span className={classNames('input-section__message')}>Phone</span>
                    {phoneError &&
                      <span className={classNames('input-section__error-message')}>
                        {phoneError}
                      </span>
                    }
                    <input
                      onChange={e => setPhone(e.target.value)}
                      value={phone}
                      onBlur={e => validateAndSetError(setPhoneError, [isEmpty, phone])} className='tell-input'
                      type="tel"
                    />
                  </label>
                </fieldset>

                <fieldset>
                  <legend>Checkout</legend>

                  {/* card number input */}
                  <label className={classNames('input-section')}>
                    <span className={classNames('input-section__message')}>Card number</span>
                    {cardNumberError &&
                      <span className={classNames('input-section__error-message')}>
                        {cardNumberError}
                      </span>
                    }
                    <input
                      onChange={e => setCardNumberValue(e.target.value)}
                      value={cardNumberValue}
                      onBlur={validateAndSetError(setCardNumberError, [isEmpty, cardNumber])}
                      type="number"
                    />
                  </label>

                    {/* Exp date card number input */}
                  <label className={classNames('input-section')}>
                    <span className={classNames('input-section__message')}>Expiry date</span>
                    {expiryDateError &&
                      <span className={classNames('input-section__error-message')}>{expiryDateError}
                        {expiryDateError}
                      </span>
                    }
                    <input
                      onChange={e => setExpiryDate(e.target.value)}
                      value={expiryDate}
                      onBlur={validateAndSetError(setExpiryDateError, [isEmpty, exprCardDate])}
                      type="date"
                    />
                  </label>

                    {/* Input CVC card number */}
                  <label className={classNames('input-section')}>
                    <span className={classNames('input-section__message')}>CVC</span>
                    {cvcError &&
                      <span className={classNames('input-section__error-message')}>
                        {cvcError}
                      </span>
                    }
                    <input
                    onChange={e => setCvc(e.target.value)}
                    value={cvc}
                    onBlur={validateAndSetError(setCvcError, [isEmpty, moreThan3])}
                    type="number"
                    />
                  </label>
                </fieldset>
              </div>
              <p className={classNames('donation-form__pharagraph')}>
                If don’t cancel your subscription
                before the trial ends on April 15,
                2021, you agree that you will
                automatically be charged
              </p>
              <input value="DONATE" className={classNames('donation-form__submit')} type="submit"></input>
            </form>

        </div>
        <button
          className={classNames('js-donation-popup-close donation-popup__close')}
          onClick={closeHandler}
        >×</button>
      </div>
    </>
  );
};

import { useState } from 'react';
import classNames from 'classnames';

import './DonationPopup.scss';

export const DonationPopup = (props) => {
  const [isClosing, setIsClosing] = useState(false);

  const chooseAnimalError = false;
  const toDonateError = false;
  const nameError = false;
  const emailError = false;
  const phoneError = false;
  const cardNumberError = false;
  const expiryDateError = false;
  const cvcError = false;

  const closeHandler = e => {
    setIsClosing(props.isOpened);
    props.close(e);
  };

  return (
    <>
      <div
        className="donation-popup__background-listener"
        onClick={closeHandler}
      ></div>
      <div className={classNames('donation-popup',{
        'donation-popup--closing': isClosing
      })}>
        <div className="donation-popup__wrapper">
          <div className="donation-popup__img"></div>
            <form className="donation_form">
              <h3 className="donation_form__title">Donate for your animal</h3>
              <fieldset className="donation_form__animal_section">
                <label className="input-section">
                  <input type="text" placeholder="" data-min-length="3" />
                  <span className="input-section__message">Choose an animal</span>
                  {chooseAnimalError &&
                    <span className="js-error-message input-section__error-message">Invalid value</span>
                  }
                </label>
                <label className="input-section">
                  <input type="text" placeholder="" />
                  <span className="input-section__message">To donate</span>
                  {toDonateError &&
                    <span className="js-error-message input-section__error-message">Invalid value</span>
                  }
                </label>
              </fieldset>
              <div className="donation_form__block">
                <fieldset>
                  <legend>About you</legend>
                  <label className="input-section">
                    <input type="text" placeholder="" />
                    <span className="input-section__message">Name</span>
                    {nameError &&
                      <span className="js-error-message input-section__error-message">Invalid value</span>
                    }
                  </label>
                  <label className="input-section">
                    <input type="email" placeholder="" />
                    <span className="input-section__message">Email</span>
                    {emailError &&
                      <span className="js-error-message input-section__error-message">Invalid value</span>
                    }
                  </label>
                  <label className="input-section">
                    <input type="tel" placeholder="" data-min-length="3" />
                    <span className="input-section__message">Phone</span>
                    {phoneError &&
                      <span className="js-error-message input-section__error-message">Invalid value</span>
                    }
                  </label>
                </fieldset>

                <fieldset>
                  <legend>Checkout</legend>
                  <label className="input-section">
                    <input type="text" placeholder="" data-min-length="5" />
                    <span className="input-section__message">Card number</span>
                    {cardNumberError &&
                      <span className="js-error-message input-section__error-message">Invalid value</span>
                    }
                  </label>
                  <label className="input-section">
                    <input type="date" placeholder="" data-min-length="3" />
                    <span className="input-section__message">Expiry date</span>
                    {expiryDateError &&
                      <span className="js-error-message input-section__error-message">Invalid value</span>
                    }
                  </label>
                  <label className="input-section">
                    <input type="text" placeholder="" data-min-length="4" />
                    <span className="input-section__message">CVC</span>
                    {cvcError &&
                      <span className="js-error-message input-section__error-message">Invalid value</span>
                    }
                  </label>
                </fieldset>
              </div>
              <p className="donation_form__info">
                If don’t cancel your subscription
                before the trial ends on April 15,
                2021, you agree that you will
                automatically be charged
              </p>
              <input value="DONATE" className="donation_form__submit" type="submit"></input>
            </form>
        </div>
        <button
          className="js-donation-popup-close donation-popup__close"
          onClick={closeHandler}
        >×</button>
      </div>
    </>
  );
};

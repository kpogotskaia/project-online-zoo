import { useState } from 'react';
import classNames from 'classnames';

import './DonationPopup.scss';

/* const isEmpty = v => v
  ? ''
  : 'Error: value shoudnt be empty';

const minChars = minInclusive => v => v.length >= minInclusive
  ? ''
  : `Error: value should be more than ${minInclusive} characters`; */

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
                <label className={classNames('input-section')}>
                  <input type="text" placeholder="" data-min-length="3"/>

                  <span className={classNames('input-section__message')}>Choose an animal</span>
                  {chooseAnimalError &&
                    <span className={classNames('js-error-message input-section__error-message')}>Invalid value</span>
                  }
                </label>
                <label className={classNames('input-section')}>
                  <input type="text" placeholder="" />
                  <span className={classNames('input-section__message')}>To donate</span>
                  {toDonateError &&
                    <span className={classNames('js-error-message input-section__error-message')}>Invalid value</span>
                  }
                </label>
              </fieldset>
              <div className={classNames('donation-form__about')}>
                <fieldset>
                  <legend>About you</legend>
                  <label className={classNames('input-section')}>
                    <input type="text" placeholder="" />
                    <span className={classNames('input-section__message')}>Name</span>
                    {nameError &&
                      <span className={classNames('js-error-message input-section__error-message')}>Invalid value</span>
                    }
                  </label>
                  <label className={classNames('input-section')}>
                    <input type="email" placeholder="" />
                    <span className={classNames('input-section__message')}>Email</span>
                    {emailError &&
                      <span className={classNames('js-error-message input-section__error-message')}>Invalid value</span>
                    }
                  </label>
                  <label className={classNames('input-section')}>
                    <input type="tel" placeholder="" data-min-length="3" />
                    <span className={classNames('input-section__message')}>Phone</span>
                    {phoneError &&
                      <span className={classNames('js-error-message input-section__error-message')}>Invalid value</span>
                    }
                  </label>
                </fieldset>

                <fieldset>
                  <legend>Checkout</legend>
                  <label className={classNames('input-section')}>
                    <input type="text" placeholder="" data-min-length="5" />
                    <span className={classNames('input-section__message')}>Card number</span>
                    {cardNumberError &&
                      <span className={classNames('js-error-message input-section__error-message')}>Invalid value</span>
                    }
                  </label>
                  <label className={classNames('input-section')}>
                    <input type="date" placeholder="" data-min-length="3" />
                    <span className={classNames('input-section__message')}>Expiry date</span>
                    {expiryDateError &&
                      <span className={classNames('js-error-message input-section__error-message')}>Invalid value</span>
                    }
                  </label>
                  <label className={classNames('input-section')}>
                    <input type="text" placeholder="" data-min-length="4" />
                    <span className={classNames('input-section__message')}>CVC</span>
                    {cvcError &&
                      <span className={classNames('js-error-message input-section__error-message')}>Invalid value</span>
                    }
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

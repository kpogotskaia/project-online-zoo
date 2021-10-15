import './DonationPopup.scss';

const isEmpty = v => v
  ? ''
  : 'Error: value shoudnt be empty';

const minChars = minInclusive => v => v.length >= minInclusive
  ? ''
  : `Error: value should be more than ${minInclusive} characters`;

export const DonationPopup = () => {
  return (
    <div className="donation-popup is-hidden">
      <div className="donation-popup__wrapper">
        <div className="donation-popup__img"></div>
        <form className="donation_form">
          <h3 className="donation_form__title">Donate for your animal</h3>
          <fieldset className="donation_form__animal_section">
            <label className="input-section">
              <input type="text" placeholder="" data-min-length="3" />
              <span className="input-section__message">Choose an animal</span>
              <span className="js-error-message input-section__error-message is-hidden">Invalid value</span>
            </label>
            <label className="input-section">
              <input type="text" placeholder="" />
              <span className="input-section__message">To donate</span>
              <span className="js-error-message input-section__error-message is-hidden">Invalid value</span>
            </label>
          </fieldset>
          <div className="donation_form__block">
            <fieldset>
              <legend>About you</legend>
              <label className="input-section">
                <input type="text" placeholder="" />
                <span className="input-section__message">Name</span>
                <span className="js-error-message input-section__error-message is-hidden">Invalid value</span>
              </label>
              <label className="input-section">
                <input type="email" placeholder="" />
                <span className="input-section__message">Email</span>
                <span className="js-error-message input-section__error-message is-hidden">Invalid value</span>
              </label>
              <label className="input-section">
                <input type="tel" placeholder="" data-min-length="3" />
                <span className="input-section__message">Phone</span>
                <span className="js-error-message input-section__error-message is-hidden">Invalid value</span>
              </label>
            </fieldset>

            <fieldset>
              <legend>Checkout</legend>
              <label className="input-section">
                <input type="text" placeholder="" data-min-length="5" />
                <span className="input-section__message">Card number</span>
                <span className="js-error-message input-section__error-message is-hidden">Invalid value</span>
              </label>
              <label className="input-section">
                <input type="date" placeholder="" data-min-length="3" />
                <span className="input-section__message">Expiry date</span>
                <span className="js-error-message input-section__error-message is-hidden">Invalid value</span>
              </label>
              <label className="input-section">
                <input type="text" placeholder="" data-min-length="4" />
                <span className="input-section__message">CVC</span>
                <span className="js-error-message input-section__error-message is-hidden">Invalid value</span>
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
      <button className="js-donation-popup-close donation-popup__close">×</button>
    </div>
  );
};

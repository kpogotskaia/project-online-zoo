import { useEffect, useState } from 'react';
import classNames from 'classnames';


import './style.scss';

export const DonationPopup = (props) => {
  const [isClosing, setIsClosing] = useState(false);

  const closeHandler = e => {
    setIsClosing(props.isOpened);
    props.close(e);
  };

  const [chooseAnimal, setChooseAnimal] = useState('');
  const [toDonate, setToDonate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const [chooseAnimalDirty, setChooseAnimalDirty] = useState(false);
  const [toDonatDirty, setToDonateDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [cardNumberDirty, setCardNumberDirty] = useState(false);
  const [expiryDateDirty, setExpiryDateDirty] = useState(false);
  const [cvcDirty, setCvcDirty] = useState(false);

  const [chooseAnimalError, setChooseAnimalError] = useState('Input cannot be clear');
  const [toDonateError, setToDonateError] = useState('Input cannot be clear');
  const [nameError, setNameError] = useState('Input cannot be clear');
  const [emailError, setEmailError] = useState('Input cannot be clear');
  const [phoneError, setPhoneError] = useState('Input cannot be clear');
  const [cardNumberError, setCardNumberError] = useState('Input cannot be clear');
  const [expiryDateError, setExpiryDateError] = useState('Input cannot be clear');
  const [cvcError, setCvcError] = useState('Input cannot be clear');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (chooseAnimalError || toDonateError || nameError ||
      cardNumberError || emailError || expiryDateError || phoneError || cvcError) {
        setFormValid(false)
      } else {
        setFormValid(true)
      }
  }, [chooseAnimalError, toDonateError, nameError,
    cardNumberError, emailError, expiryDateError, phoneError, cvcError]
  )

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'text':
        setChooseAnimalDirty(true);
        setNameDirty(true);
        break;

      case 'number':
        setToDonateDirty(true);
        setCardNumberDirty(true);
        setCvcDirty(true);
        break;

      case 'email':
        setEmailDirty(true);
        break;

      case 'tel':
        setPhoneDirty(true);
        break;

      case 'date':
        setExpiryDateDirty(true);
        break;
    }
  }

  const chooseAnimalHandler = (e) => {
    setChooseAnimal(e.target.value);
    if (e.target.value < 3) {
      setChooseAnimalError('Incorrect value');
    } else {
      setChooseAnimalError('');
    }
  }

  const toDonateHandler = (e) => {
    setToDonate(e.target.value);
    if (e.target.value < 3) {
      setToDonateError('Incorrect value');
    } else {
      setToDonateError('');
    }
  }

  const nameHandler = (e) => {
    setName(e.target.value);

    const re = /^[a-zA-Z]+ [a-zA-Z]+$/;

    if (!re.test(e.target.value)) {
      setNameError('Incorrect value');
    } else {
      setNameError('');
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('Incorrect email')
      } else {
        setEmailError('');
        }
  }

  const phoneHandler = (e) => {
    setPhone(e.target.value);

    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!re.test(e.target.value)) {
      setPhoneError('Phone cannot be < 9 numbers');
      if (!e.target.value) {
        setPhoneError('Input cannot be clear');
      }
    } else {
      setPhoneError('');
    }
  }

  const cardNumberHandler = (e) => {
    setCardNumber(e.target.value);
    const cardNo = /^(?:3[47][0-9]{16})$/;

    if (e.target.value.match(cardNo)) {
      setCardNumberError('');
    } else {
      setCardNumberError('Please enter your 16 digit credit card numbers');
    }
  }

  const ExpiryDateHandler = (e) => {
    setExpiryDate(e.target.value);
    if (e.target.value < 8) {
      setExpiryDateError('Incorrect value');
    } else {
      setExpiryDateError('');
    }
  }

  const cvcHandler = (e) => {
    setCvc(e.target.value);
    if (e.target.value < 3) {
      setCvcError('Incorrect value');
    } else {
      setCvcError('');
    }
  }

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
                <label className={classNames('input-section input-section__list-menu')}>


{(chooseAnimalDirty && chooseAnimalError) &&
<span className={classNames('input-section__error-message')}>{chooseAnimalError}</span>
}
<input onChange={e => chooseAnimalHandler(e)} value={chooseAnimal} onBlur={e => blurHandler(e)} type="text" name='text'/>



                  <div className={classNames('list-menu')}>
                    <select className={classNames('drop-list')}>
                      <option value={"panda"}></option>
                      <option value={"panda"}>panda</option>
                      <option value={"elephant"}>elephant</option>
                      <option value={"tiger"}>tiger</option>
                      <option value={"eagle"}>eagle</option>
                      <option value={"monkey"}>monkey</option>
                    </select>
                  </div>
                  <span className={classNames('input-section__message')}>Choose an animal</span>
                </label>
                <label className={classNames('input-section')}>


{(toDonatDirty && toDonateError) &&
  <span className={classNames('input-section__error-message')}>{toDonateError}</span>
}
<input onChange={e => toDonateHandler(e)} value={toDonate} onBlur={e => blurHandler(e)} type="number" name='number'  />


                  <span className={classNames('input-section__message')}>To donate</span>
                </label>
              </fieldset>
              <div className={classNames('donation-form__about')}>
                <fieldset>
                  <legend>About you</legend>
                  <label className={classNames('input-section')}>



{(nameDirty && nameError) &&
<span className={classNames('input-section__error-message')}>{nameError}</span>
}
<input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} type="text" name='text'/>



                    <span className={classNames('input-section__message')}>Name</span>
                  </label>
                  <label className={classNames('input-section')}>



{(emailDirty && emailError) &&
<span className={classNames('input-section__error-message')}>{emailError}</span>
}
<input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name='email'  />


                    <span className={classNames('input-section__message')}>Email</span>
                  </label>
                  <label className={classNames('input-section')}>
                    <input type="tel"  data-min-length="3" />



{(phoneDirty && phoneError) &&
<span className={classNames('input-section__error-message')}>{phoneError}</span>
}
<input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} className='tell-input' name='tel' type="tel"  data-min-length="3" />



                    <span className={classNames('input-section__message')}>Phone</span>
                  <div className={classNames('phone-menu')}>
                    <select className={classNames('drop-list')}>
                      <option value={"panda"}>+1</option>
                      <option value={"panda"}>+7</option>
                      <option value={"elephant"}>+375</option>
                      <option value={"tiger"}>+370</option>
                      <option value={"eagle"}>+410</option>
                      <option value={"monkey"}>+8</option>
                    </select>
                  </div>
                    <span className={classNames('deviding-line')}></span>
                  </label>
                </fieldset>

                <fieldset>
                  <legend>Checkout</legend>
                  <label className={classNames('input-section')}>



{(cardNumberDirty && cardNumberError) &&
<span className={classNames('input-section__error-message')}>{cardNumberError}</span>
}
<input onChange={e => cardNumberHandler(e)} value={cardNumber} onBlur={e => blurHandler(e)} type="number" name='number' data-min-length="5" />



                    <span className={classNames('input-section__message')}>Card number</span>
                  </label>
                  <label className={classNames('input-section')}>



{(expiryDateDirty && expiryDateError) &&
<span className={classNames('input-section__error-message')}>{expiryDateError}</span>
}
<input onChange={e => ExpiryDateHandler(e)} value={expiryDate} onBlur={e => blurHandler(e)} type="date" name='date'  data-min-length="3" />



                    <span className={classNames('input-section__message')}>Expiry date</span>
                  </label>
                  <label className={classNames('input-section')}>



{(cvcDirty && cvcError) &&
<span className={classNames('input-section__error-message')}>{cvcError}</span>
}
<input onChange={e => cvcHandler(e)} value={cvc} onBlur={e => blurHandler(e)} type="number" name='number'  data-min-length="4" />



                    <span className={classNames('input-section__message')}>CVC</span>
                  </label>
                </fieldset>
              </div>
              <p className={classNames('donation-form__pharagraph')}>
                If don’t cancel your subscription
                before the trial ends on April 15,
                2021, you agree that you will
                automatically be charged
              </p>
              <input disabled={!formValid} value="DONATE" className={classNames('donation-form__submit')} type="submit"></input>
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

import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { SOCIAL_ICONS } from '../../constants';
import { ROUTES } from '../../navigation';

import './Footer.scss';
import ArrowImg from '../../assets/Arrow4.png';
import { SectionWrapper } from '../SectionWrapper';

export const Footer = () => {
  return (
    <footer>
      <SectionWrapper>
        <div className="footer">
          <Link to="/" className="footer__logo">
            <span>zoo</span>
            <span>online</span>
          </Link>
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              {ROUTES.map(route => (
                <li key={route.label} className="footer__menu-list-item">
                  <Link to={route.link}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__contacts">
          <div className="form">
            <h4 className="footer__contacts-heading">Contact us</h4>
            <form action="#">
              <fieldset className="contact-form">
                <label className="input-section">
                  <input type="text" placeholder="Name" />
                </label>
                <label className="input-section">
                  <input type="email" placeholder="Email" />
                </label>
                <label className="input-message">
                  <input type="text" placeholder="" />
                    <span className="">Please enter your message</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" value="value" />
                    I agree to the processing of Personal Data
                </label>
              </fieldset>

              <a href="mailto: abc@example.com" className="send-button">
                <button>send</button>
                <img src={ArrowImg} alt="arrow" />
              </a>
            </form>
          </div>
          <div className="contact">
            <h6 className="contact__heading">zoo online centre</h6>
            <span className="address">
              132, Address District, Street<br/>
              Open Daily 10:00 am - 5:00 pm
            </span>
            <span className="phone">
              T(702) 163-3433<br/>
              zoo.online@gmail.com
            </span>

            <div className="sociales">
              {SOCIAL_ICONS.map(data => (
                <a key={data.description} href={data.link}>
                  <img src={data.imgUrl} alt={data.description} />
                </a>
              ))}
            </div>

          </div>
        </div>
        <Button name='donate for volonteers' className="footer-button"/>
        <div className="footer-line"></div>
        <div className="signature">@Krystsina Pogotskaia</div>
      </SectionWrapper>
    </footer>
  );
};

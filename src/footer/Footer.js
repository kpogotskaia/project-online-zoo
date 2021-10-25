import './Footer.scss';
import YoutubeIcon from '../assets/sociales/youtube.png';
import InstagramIcon from '../assets/sociales/instagram.png';
import TwitterIcon from '../assets/sociales/twitter.png';
import VKIcon from '../assets/sociales/vk.png';
import ArrowImg from '../assets/Arrow4.png';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <a href="#" className="footer__logo">
            <span>zoo</span>
            <span>online</span>
          </a>
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              <li className="footer__menu-list-item">
                <a href="#">About</a>
              </li>
              <li className="footer__menu-list-item">
                <a href="#">Zoos</a>
              </li>
              <li className="footer__menu-list-item">
                <a href="#" className="">Map</a>
              </li>
              <li className="footer__menu-list-item">
                <a href="#" className="">Design</a>
              </li>
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

              <a className="send-button">
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
              <a href="#"><img src={InstagramIcon} alt="instagram" /></a>
              <a href="#"><img src={TwitterIcon} alt="twitter" /></a>
              <a href="#"><img src={VKIcon} alt="vk" /></a>
              <a href="#"><img src={YoutubeIcon} alt="youtube" /></a>
            </div>
          </div>
        </div>
        <button className="footer-button">donate for volonteers</button>
        <div className="footer-line"></div>
        <div className="signature">@Krystsina Pogotskaia</div>
      </div>
    </footer>
  );
};

import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { SOCIAL_ICONS } from '../../constants';
import { ROUTES } from '../../navigation';

import styles from './style.module.scss';
import ArrowImg from '../../assets/Arrow4.png';
import { SectionWrapper } from '../SectionWrapper';

export const Footer = () => {
  return (
    <footer>
      <SectionWrapper>
        <div className={styles.footer}>
          <Link to="/"  className={styles.footerLogo}>
            <span>zoo</span>
            <span>online</span>
          </Link>
          <nav  className={styles.footerMenu}>
            <ul  className={styles.footerMenuList}>
              {ROUTES.map(route => (
                <li key={route.label}  className={styles.footerMenuListItem}>
                  <Link to={route.link}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div  className={styles.footerContacts}>
          <div  className={styles.form}>
            <h4  className={styles.formHeading}>Contact us</h4>
            <form action="#">
              <fieldset  className={styles.contactForm}>
                <label  className={styles.inputSection}>
                  <input type="text" placeholder="Name" />
                </label>
                <label  className={styles.inputSection}>
                  <input type="email" placeholder="Email" />
                </label>
                <label  className={styles.inputMessage}>
                  <input type="text" placeholder="" />
                    <span>Please enter your message</span>
                </label>
                <label  className={styles.checkbox}>
                  <input type="checkbox" name="checkbox" value="value" />
                    I agree to the processing of Personal Data
                </label>
              </fieldset>

              <a href="mailto: abc@example.com"  className={styles.sendButton}>
                <button>send</button>
                <img src={ArrowImg} alt="arrow" />
              </a>
            </form>
          </div>
          <div  className={styles.contact}>
            <h6  className={styles.contactHeading}>Zoo online centre</h6>
            <span  className={styles.address}>
              132, Address District, Street<br/>
              Open Daily 10:00 am - 5:00 pm
            </span>
            <span  className={styles.phone}>
              T(702) 163-3433<br/>
              zoo.online@gmail.com
            </span>

            <div  className={styles.sociales}>
              {SOCIAL_ICONS.map(data => (
                <a key={data.description} href={data.link}>
                  <img src={data.imgUrl} alt={data.description} />
                </a>
              ))}
            </div>
            <Button name='donate for volonteers'  className={styles.footerButton}/>
          </div>
        </div>

        <div  className={styles.footerLine}></div>
        <div  className={styles.signature}>@Krystsina Pogotskaia</div>
      </SectionWrapper>
    </footer>
  );
};

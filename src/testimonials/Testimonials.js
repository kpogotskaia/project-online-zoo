import classes from './Testimonials.module.scss';

import { Button } from '../button/Button';
import { Paginator} from '../paginator/Paginator';

import UserMImg from '../assets/users/usrM.png';
import UserGImg from'../assets/users/users.png';

const TESTIMONIALS = [
{  imgUrl: UserMImg,
  alt: 'profile Img',
  heading: 'Vlad Kim',
  desc: `As a voice for wildlife, we are devastated
  by the impact of the 2020 Australian
  bushfires on precious species and their
  habitat.`
},
{ imgUrl: UserGImg,
  alt: 'profile Img',
  heading: 'Nastya Sidorova',
  desc: `As a voice for wildlife, we are devastated
  by the impact of the 2020 Australian
  bushfires on precious species and their
  habitat.`
}
]

const buttonIcon = {
  imgUrl: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="15.5" stroke="white"/>
  <path d="M21 16L13.5 20.3301V11.6699L21 16Z" fill="white"/>
  </svg>
}

export const Testimonials = () => {
  return (
    <section className={classes['testimonialses']}>
      <div className={classes['testimonialses__arrow-left']}></div>
        <div className={classes['container']}>
          <h1 className={classes['testimonialses__heading']}>Testimonials</h1>

          <div className={classes['testimonialses__block']}>
            {TESTIMONIALS.map(testimonials => (
              <div className={classes['testimonialses__block-info']}>
                <div className={classes['card-user']}>
                    <img src={testimonials.imgUrl} alt={testimonials.alt} />
                </div>
                <h3 className={classes['name']}>{testimonials.heading}</h3>
                <p className={classes['pharagraph']}>{testimonials.desc}</p>
            </div>
            ))}
          </div>

    <Paginator />
    <Button name='leave feedback' />
        </div>
      <div className={classes['testimonialses__arrow-right']}></div>
    </section>
  );
};

import classes from './HowItWorks.module.scss';

import { Button } from '../button/Button';
import { Paginator } from '../paginator/Paginator';

import buttonIcon from '../assets/buttonIcon.png'
import { BENEFITS } from '../constants';

export const HowItWorks = () => {
  return (
    <section className={classes['operation']}>
      <div className={classes['container']}>
        <h3 className={classes['operation__heading']}>How it works?</h3>
        <p className={classes['operation__pharagraph']}>
            As a voice for wildlife, we are devastated by the impact
            of the 2020 Australian bushfires on precious species and
            their habitat, and we are determined to assist in all
            aspects, including providing veterinary support and
            raising much-needed emergency funds. Zoo Online saves
            wildlife and inspires everyone to make conservation
            a priority in their lives. Animals have the right
            to a pain-free and happy life. They have equal
            claim to the resources of this planet, and deserve
            a life of dignity and compassion.As a voice for wildlife,
            we are devastated by the impact of the 2020 Australian
            bushfires on precious species and their habitat.
        </p>

        <HowItWorks />
        <Paginator />
        <Button name='watch online' icon={buttonIcon}/>
      </div>

      <div className={classes['operation__benefits']}>
        <div className={classes['container']}>
          {BENEFITS.map((benefits, i) => (
            <div key={i} className={classes['benefits-block']}>
              <img className={classes['benefits-block__img']} src={benefits.imgUrl} alt={benefits.alt} />
              <h5  className={classes['benefits-block__heading']}> {benefits.heading} </h5>
              <p>{benefits.pharagraph}</p>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
};

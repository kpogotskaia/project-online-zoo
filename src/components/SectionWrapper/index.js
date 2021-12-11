import classNames from 'classnames';

import styles from './style.module.scss';

export const SectionWrapper = ({ className, children }) => {
  return (
    <section className={classNames(className, styles.sectionWrapper)}>
      {children}
    </section>
  );
};

import styles from './style.module.scss';

export const SectionWrapper = ({ children }) => {
  return (
    <section className={styles.sectionWrapper}>
      {children}
    </section>
  );
};

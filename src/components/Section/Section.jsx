import PropTypes from 'prop-types';
import s from '../Section/Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <section className={s.section}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

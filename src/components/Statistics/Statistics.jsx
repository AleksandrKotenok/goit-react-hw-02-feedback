import { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Fragment>
      {total > 0 && (
        <div className={s.statBox}>
          <p className={s.stat}>Good:{good}</p>
          <p className={s.stat}>Neutral:{neutral}</p>
          <p className={s.stat}>Bad:{bad}</p>
          <p className={s.stat}>Total:{total}</p>
          <p className={s.stat}>Positive feedback:{positivePercentage}%</p>
        </div>
      )}
    </Fragment>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

import { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

export const Statistics = ({
  // good,
  // neutral,
  // bad,
  statistics,
  total,
  positivePercentage,
}) => {
  return (
    <Fragment>
      {total > 0 && (
        <ul className={s.statBox}>
          {statistics.map(([key, value]) => (
            <li>
              {key}:{value}
            </li>
          ))}
          <li className={s.stat}>Total:{total}</li>
          <li className={s.stat}>Positive feedback:{positivePercentage}%</li>
        </ul>
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

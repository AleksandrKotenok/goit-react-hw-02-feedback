import PropTypes from 'prop-types';
import s from '../Notification/Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={s.note}>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string,
};

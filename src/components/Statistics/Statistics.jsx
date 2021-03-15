import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total ? (
    <ul className={styles.list}>
      <li className={styles.list__item}>Good: {good}</li>
      <li className={styles.list__item}>Neutral: {neutral}</li>
      <li className={styles.list__item}>Bad: {bad}</li>
      <li className={styles.list__item_total}>Total: {total}</li>
      <li className={styles.list__item}>
        Positive feedback:
        <span className={styles.feedbackResults}>{positivePercentage}%</span>
      </li>
    </ul>
  ) : (
    <Notification message="No feedback given" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

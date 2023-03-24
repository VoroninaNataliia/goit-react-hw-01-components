import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : ''}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.item} key={id}>
            <p className={s.label}>{label}</p>
            <p className={s.percentage}>{percentage}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;

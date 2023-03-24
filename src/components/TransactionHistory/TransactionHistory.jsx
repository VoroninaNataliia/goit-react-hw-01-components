import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ amount, currency, id, type }) => (
          <tr key={id}>
            <td className={s.td}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  amount: PropTypes.string,
  currency: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default TransactionHistory;

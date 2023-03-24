import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className={s.item}>
        {isOnline ? (
          <span className={s.statusTrue}></span>
        ) : (
          <span className={s.statusFalse}></span>
        )}
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};

export default FriendListItem;
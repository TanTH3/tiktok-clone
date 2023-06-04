import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './FollowAccount.module.scss';
import Image from '~/components/Image';
import { TickBlueIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountFollow({ data, onClick }) {
  
  return (
    <div>
        <Link
          to={`/@${data.nickname}`}
          className={cx('Item')}
          state={{ data: data.nickname }}
        >
          <Image
            className={cx('avatar')}
            src={data.avatar}
            alt={data.last_name}
            fallback="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
          />
          <div className={cx('info')} onClick={onClick}>
            <p className={cx('user-name')}>
              <span>{data.nickname}</span>
              {data.tick && (
                <span className={cx('check')}>
                  <TickBlueIcon />
                </span>
              )}
            </p>
            <span className={cx('real-name')}>{data.full_name}</span>
          </div>
        </Link>
   
    </div>
  );
}

AccountFollow.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
export default AccountFollow;

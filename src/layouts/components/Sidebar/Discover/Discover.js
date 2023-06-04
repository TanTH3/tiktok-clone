import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import { HashtagIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
const LIST_DiSCOVER = [
  'suthatla',
  'mackedoi',
  'sansangthaydoi',
  'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia',
  'Thiên Thần Tình Yêu - RICKY STAR ạnd T.R.I',
  'Anh Yêu Vội Thế (Mee Remix) - LaLa Trần, Mee Media',
  '7749hieuung',
  'genzlife',
  'Vui Lắm Nha (TikTok Remix 1) - Hương Ly & Jombie',
  'Con Bướm Xuân (Remix) - Cukak & H2K & BHMedia',
  'AboutNewsroomContactCareers',
];

function Discover() {
  return (
    <div className={cx('wrapper')}>
      <span className={cx('title')}>Discover</span>
      {LIST_DiSCOVER.map((di, i) => (
        <button className={cx('discover-item')} key={i}>
          <span className={cx('icon-hashtag')}>
            <HashtagIcon />
          </span>
          <span className={cx('content')}>{di}</span>
        </button>
      ))}
    </div>
  );
}

export default Discover;

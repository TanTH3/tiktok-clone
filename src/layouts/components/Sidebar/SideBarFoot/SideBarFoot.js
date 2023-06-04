import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('footer')}>
        <Link className={cx('item')} to="/">
          About
        </Link>
        <Link className={cx('item')} to="/">
          Newsroom
        </Link>
        <Link className={cx('item')} to="/">
          Contact
        </Link>
        <Link className={cx('item')} to="/">
          Careers
        </Link>
        <Link className={cx('item')} to="/">
          ByteDance
        </Link>
      </div>
      <div className={cx('footer')}>
        <Link className={cx('item')} to="/">
          TikTok for Good
        </Link>
        <Link className={cx('item')} to="/">
          Advertise
        </Link>
        <Link className={cx('item')} to="/">
          Developers
        </Link>
        <Link className={cx('item')} to="/">
          Transparency
        </Link>
        <Link className={cx('item')} to="/">
          TikTok Rewards
        </Link>
      </div>
      <div className={cx('footer')}>
        <Link className={cx('item')} to="/">
          Help
        </Link>
        <Link className={cx('item')} to="/">
          Safety
        </Link>
        <Link className={cx('item')} to="/">
          Terms
        </Link>
        <Link className={cx('item')} to="/">
          Privacy
        </Link>
        <Link className={cx('item')} to="/">
          Creator Portal
        </Link>
        <Link className={cx('item')} to="/">
          Community Guidelines
        </Link>
      </div>
      <div className={cx('footer')}>
        <Link className={cx('item')} to="/">
          © 2023 TikTok
        </Link>
      </div>
    </div>
  );
}

export default Footer;

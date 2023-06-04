import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import Content from '~/components/Content';

const cx = classNames.bind(styles);

function Following() {
  return (
    <div className={cx('container')}>
      <div className={cx('content')}>
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}

export default Following;

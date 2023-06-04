import { useContext } from 'react';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './LogIn.module.scss';
import { ThemeContext } from '~/layouts/ThemeContext';

const cx = classNames.bind(styles);
function LogIn() {
  const context = useContext(ThemeContext);

  return (
    <div>
      <span className={cx('description')}>
        Log in to follow creators, like videos, and view comments.
      </span>
      <Button outline big onClick={context.handleLogger}>
        Log in
      </Button>
    </div>
  );
}

export default LogIn;

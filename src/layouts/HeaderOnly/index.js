import Header from '~/layouts/components/Header';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className={cx('wrapper')}>{children}</div>
    </div>
  );
}

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderOnly;

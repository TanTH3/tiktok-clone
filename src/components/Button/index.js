import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  outline,
  onClick,
  children,
  small,
  big,
  text,
  leftIcon,
  disabled,
  rightIcon,
  rounded,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  // remove event handlers
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }
  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    big,
    rounded,
    text,
  });

  return (
    <Comp className={classes} {...props} state={{ data: to }}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
  big: PropTypes.bool,
  text: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

export default Button;

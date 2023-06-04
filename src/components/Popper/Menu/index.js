import { useState, useContext } from 'react';

import { ThemeContext } from '~/layouts/ThemeContext';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({
  hideOnClick = false,
  children,
  items = [],
  onChange = defaultFn,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const context = useContext(ThemeContext);

  const renderItems = () => {
    return current.data.map((item, i) => {
      const isParent = !!item.children;
      const isLogOut = item.separate;
      return (
        <MenuItem
          key={i}
          data={item}
          onClick={
            isLogOut
              ? context.handleLogger
              : () => {
                  if (isParent) {
                    setHistory((prev) => [...prev, item.children]);
                  } else {
                    onChange(item);
                  }
                }
          }
        />
      );
    });
  };
  return (
    <Tippy
      hideOnClick={hideOnClick}
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() =>
                  setHistory((prev) => prev.slice(0, history.length - 1))
                }
              />
            )}
            <div className={cx('menu-body')}> {renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  hideOnClick: PropTypes.bool,
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
};

export default Menu;

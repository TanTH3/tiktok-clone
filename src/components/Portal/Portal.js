import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import styles from './Portal.module.scss';

const cx = classNames.bind(styles);
const modalRoot = document.getElementById('root');

function Portal({ visible, setVisible, children, onMouseEnter, onMouseLeave }) {
    return createPortal(
        <div
            className={cx(`modal${visible ? '' : 'hide'}`)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>,
        modalRoot,
    );
}

export default Portal;

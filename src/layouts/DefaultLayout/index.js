import { useRef } from 'react';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const sidebarRef = useRef();

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div ref={sidebarRef} className={cx('side-bar')}>
                    <Sidebar />

                    <div className={cx('scroll-sidebar')} />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;

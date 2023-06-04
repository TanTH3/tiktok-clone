import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import {
    HomeIconActive,
    HomeIconDefault,
    UsersIconActive,
    UsersIconDefault,
    CompassIconActive,
    CompassIconDefault,
    LiveIconActive,
    LiveIconDefault,
} from '~/components/Icons';

import { ThemeContext } from '~/layouts/ThemeContext';
import Menu, { MenuItem } from './Menu';
import LogIn from './LogIn';
import SuggestHosts from './SuggestHosts';
import Discover from './Discover';
import FollowAccount from './FollowAccount';
import Footer from './SideBarFoot';
import Portal from '~/components/Portal';

import config from '~/config';

const cx = classNames.bind(styles);

const MENU_SIDEBAR = [
    {
        title: 'For You',
        to: config.routes.home,
        icon: {
            active: <HomeIconActive />,
            default: <HomeIconDefault />,
        },
    },
    {
        title: 'Following',
        to: config.routes.following,
        icon: {
            active: <UsersIconActive />,
            default: <UsersIconDefault />,
        },
    },
    {
        title: 'Explore',
        to: config.routes.explore,
        icon: {
            active: <CompassIconActive />,
            default: <CompassIconDefault />,
        },
    },
    {
        title: 'LIVE',
        to: config.routes.live,
        icon: {
            active: <LiveIconActive />,
            default: <LiveIconDefault />,
        },
    },
];

function Sidebar() {
    const [visible, setVisible] = useState(true);

    const context = useContext(ThemeContext);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <div className={cx('menu-sidebar')}>
                    {MENU_SIDEBAR.map((menu, i) => (
                        <MenuItem
                            key={i}
                            title={menu.title}
                            to={menu.to}
                            icon={menu.icon.default}
                            iconActive={menu.icon.active}
                        />
                    ))}
                </div>
            </Menu>

            {!context.isLogIn && (
                <>
                    {/* Log In */}
                    <div className={cx('login-sidebar')}>
                        <LogIn />
                    </div>
                    {/* Suggests Hosts */}

                    <div className={cx('suggest-hosts')}>
                        <SuggestHosts />
                    </div>
                </>
            )}
            {/* Suggests Hosts */}

            {context.isLogIn && (
                <div className={cx('follow-account')}>
                    <FollowAccount />
                </div>
            )}

            {/* Discover */}
            <div className={cx('discover')}>
                <Discover />
            </div>

            {/* Footer */}
            <div className={cx('footer')}>
                <Footer />
            </div>
        </aside>
    );
}

export default Sidebar;

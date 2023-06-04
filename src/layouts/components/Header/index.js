import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faSignOut,
    faGear,
} from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from '~/layouts/ThemeContext';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import Search from '~/layouts/components/Search';
import Modal from '~/layouts/components/Modal';
import Portal from '~/components/Portal';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const useMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hniehtu10',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin?enter_from=web_main_nav',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        separate: true,
    },
];

function Header() {
    const context = useContext(ThemeContext);
    const [visible, setVisible] = useState(false);
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const handleSetModal = () => {
        setVisible((prev) => !prev);
        console.log(123, visible);
    };

    return (
        <header className={cx('wrapper')}>
            <Portal visible={visible} setVisible={setVisible}>
                <Modal OnInCrease={handleSetModal} />
            </Portal>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {context.isLogIn ? (
                        <>
                            <Button
                                text
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                to="/upload"
                            >
                                Upload
                            </Button>
                            <Tippy content={'Messages'} placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content={'inbox'} placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                            <Menu items={useMenu} onChange={handleMenuChange}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://trinhvantuyen.com/wp-content/uploads/2022/03/hinh-anh-avatar-cho-con-gai-1-600x600.jpg"
                                    alt="avatar"
                                    fallback="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-de-thuong.jpg"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button
                                text
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                onClick={handleSetModal}
                            >
                                Upload
                            </Button>
                            <Button primary onClick={context.handleLogger}>
                                Login
                            </Button>

                            <Menu
                                items={MENU_ITEMS}
                                onChange={handleMenuChange}
                            >
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                    />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;

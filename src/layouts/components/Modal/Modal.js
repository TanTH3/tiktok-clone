import { useState } from 'react';

import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import {
    QRIcon,
    UserIcon,
    FacebookIcon,
    GoogleIcon,
    TwitterIcon,
    LINEIcon,
    KakaoTalkIcon,
    InstagramIcon,
    ExitIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);
function Modal({ OnInCrease }) {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={cx('modal')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    {isLogin ? (
                        <>
                            <div className={cx('content')}>
                                <div className={cx('menu')}>
                                    <div className={cx('title')}>Log in to TikTok</div>
                                    <div className={cx('item')}>
                                        <QRIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Use QR code</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <UserIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Use phone / email / uesrname</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <FacebookIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Continue with Facebook</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <GoogleIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Continue with Google</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <TwitterIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Continue with Twitter</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <LINEIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Continue with LINE</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <KakaoTalkIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Continue with KakaoTalk</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <QRIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Continue with Facebook</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <InstagramIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Continue with Instagram</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('footer')}>
                                <div className={cx('bottom-text')}>Don't have an account?</div>
                                <span className={cx('Sign')} onClick={() => setIsLogin(false)}>
                                    Sign up
                                </span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={cx('content')}>
                                <div className={cx('menu')}>
                                    <div className={cx('title')}>Sign up for TikTok</div>

                                    <div className={cx('item')}>
                                        <UserIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Use phone or email</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <FacebookIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Continue with Facebook</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <GoogleIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Continue with Google</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <TwitterIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Continue with Twitter</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <LINEIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Continue with LINE</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <KakaoTalkIcon className={cx('icon')} />
                                        <span className={cx('options-login')}>Continue with KakaoTalk</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('footer')}>
                                <div className={cx('bottom-text')}>Already have an account?</div>
                                <span className={cx('Sign')} onClick={() => setIsLogin(true)}>
                                    Log In
                                </span>
                            </div>
                        </>
                    )}
                </div>
                <div className={cx('exit')} onClick={OnInCrease}>
                    <ExitIcon />
                </div>
            </div>
        </div>
    );
}

export default Modal;

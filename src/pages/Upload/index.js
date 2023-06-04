import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Upload() {
    return (
        <>
            <div className={cx('Upload')}>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <div className={cx('wrapper')}>
                            <input
                                className={cx('input-file')}
                                visbitity="hidden"
                                type="file"
                            />
                            <div className={cx('cloud-icon')}>
                                <FontAwesomeIcon
                                    icon={faCloudUpload}
                                    style={{ width: '40px', height: '29px' }}
                                />
                            </div>
                            <div className={cx('header')}>
                                Select video to upload
                            </div>
                            <div className={cx('choose')}>
                                Or drag and drop a file
                            </div>
                            <div className={cx('des')}>
                                Long videos can be split into multiple parts to
                                get more exposure
                            </div>
                            <div className={cx('condition')}>
                                <p>MP4 or WebM</p>{' '}
                                <p>720x1280 resolution or higher </p>
                                <p>Up to 30 minutes</p> <p>Less than 2 GB</p>
                            </div>
                            <div className={cx('choose-file')}>Select file</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <div className={cx('footer-content')}>
                    <div className={cx('logo')}>
                        <Link to={config.routes.home} className={cx('logo')}>
                            <img src={images.logoWhite} alt="Tiktok" />
                            <img src={images.logoTextWhite} alt="Tiktok" />
                        </Link>
                    </div>
                    <div className={cx('footer-content-column')}>
                        <div className={cx('footer-header')}>Company</div>
                        <Link to="/" className={cx('footer-item')}>
                            About
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            Newsroom
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            Contact
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            Careers
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            ByteDance
                        </Link>
                    </div>
                    <div className={cx('footer-content-column')}>
                        <div className={cx('footer-header')}>Programs</div>
                        <Link to="/" className={cx('footer-item')}>
                            TikTok for Good
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            Advertise
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            Developers
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            TikTok Rewards
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            TikTok Embeds
                        </Link>
                    </div>
                    <div className={cx('footer-content-column')}>
                        <div className={cx('footer-header')}>Support</div>
                        <Link to="/" className={cx('footer-item')}>
                            Help Center
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            Safety Center
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            Creator Portal
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            Community Guidelines
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            Transparency
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            Accessibility
                        </Link>
                    </div>
                    <div className={cx('footer-content-column')}>
                        <div className={cx('footer-header')}>Legal</div>
                        <Link to="/" className={cx('footer-item')}>
                            Terms of Use
                        </Link>
                        <Link to="/" className={cx('footer-item')}>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div className={cx('footer-bottom')}>
                    <p>© 2023 TikTok</p>
                </div>
            </div>
        </>
    );
}

export default Upload;

import classNames from 'classnames/bind';

import styles from './ProfileInfo.module.scss';
import { EditIcon } from '~/components/Icons';
import Image from '~/components/Image';
import { TickBlueIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function ProfileInfo({ data }) {
    if (data[0] === undefined || data === undefined) {
        return (
            <>
                <div className={cx('header-info')}>
                    <div className={cx('avatar')}>
                        <Image
                            className={cx('user-avatar')}
                            src="https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-cho-con-gai-1.jpg"
                            alt="avatar"
                            fallback="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                        />
                    </div>
                    <div className={cx('info-container')}>
                        <span className={cx('user-name')}>hniehtu10</span>
                        <span className={cx('real-name')}>Thu Hiền</span>
                        <button className={cx('edit-btn')}>
                            <EditIcon className={cx('edit-icon')} /> Edit
                            profile
                        </button>
                    </div>
                </div>
                <div className={cx('interact')}>
                    <div className={cx('info-interact')}>
                        <span className={cx('number-follower')}>184</span>
                        <span className={cx('follower')}>Following</span>
                        <span className={cx('number-follower')}>73</span>
                        <span className={cx('follower')}>Followers</span>
                        <span className={cx('number-follower')}>16</span>
                        <span className={cx('follower')}>Likes</span>
                    </div>
                    <p className={cx('bio')}>No bio yet.</p>
                </div>
            </>
        );
    } else {
        const results = data[0];
        return (
            <>
                <div className={cx('header-info')}>
                    <div className={cx('avatar')}>
                        <Image
                            className={cx('user-avatar')}
                            src={results.avatar}
                            alt="avatar"
                            fallback="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                        />
                    </div>
                    <div className={cx('info-container')}>
                        <span className={cx('user-name')}>
                            {results.nickname}
                            {results.tick && (
                                <span className={cx('check')}>
                                    <TickBlueIcon />
                                </span>
                            )}
                        </span>

                        <span className={cx('real-name')}>
                            {results.full_name}
                        </span>
                        <button className={cx('edit-btn')}>
                            <EditIcon className={cx('edit-icon')} /> Edit
                            profile
                        </button>
                    </div>
                </div>
                <div className={cx('interact')}>
                    <div className={cx('info-interact')}>
                        <span className={cx('number-follower')}>
                            {results.followings_count}
                        </span>
                        <span className={cx('follower')}>Following</span>
                        <span className={cx('number-follower')}>
                            {results.followers_count}
                        </span>
                        <span className={cx('follower')}>Followers</span>
                        <span className={cx('number-follower')}>
                            {results.likes_count}
                        </span>
                        <span className={cx('follower')}>Likes</span>
                    </div>
                    <p className={cx('bio')}>{results.bio}</p>
                </div>
            </>
        );
    }
}

export default ProfileInfo;

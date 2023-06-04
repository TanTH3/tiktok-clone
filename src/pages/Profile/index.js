import { useState, useLayoutEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import ProfileInfo from '~/layouts/components/ProfileInfo';
import { LockIcon } from '~/components/Icons';
import { useLocation } from 'react-router-dom';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function Profile(props) {
  const location = useLocation();

  const data = location.state?.data;

  const [searchResult, setSearchResult] = useState([]);

  useLayoutEffect(() => {
    const fetchApi = async () => {
      const result = await searchService.search(data);
      setSearchResult(result);
    };
    fetchApi();
  }, [data]);

  return (
    <div className={cx('container')}>
      <div className={cx('info')}>
        <ProfileInfo data={searchResult} />
      </div>
      <div className={cx('video-uploaded')}>
        <div className={cx('navbar')}>
          <div className={cx('navigation', 'nav-videos', 'action')}>Videos</div>
          <div className={cx('navigation', 'nav-liked')}>
            <LockIcon className={cx('lock-icon')} />

            <p>Liked</p>
          </div>
        </div>
        <div className={cx('video')}></div>
      </div>
    </div>
  );
}

export default Profile;

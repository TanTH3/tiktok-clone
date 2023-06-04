import { useState, useEffect } from 'react';
import AccountHost from './AccountHost';

import styles from './SuggestHosts.module.scss';
import classNames from 'classnames/bind';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function SuggestHosts() {
  const [searchResult, setSearchResult] = useState([]);
  const [statusView, setStatusView] = useState('less');
  const [isSeeAll, setIsSeeAll] = useState(false);
  const trend = 'ho';

  useEffect(() => {
    const fetchApi = async () => {
      const result = await searchService.search(trend, statusView);
      setSearchResult(result);
    };
    fetchApi();

    setIsSeeAll((prev) => !prev);
  }, [statusView]);

  return (
    <div>
      <span className={cx('label')}>Suggested accounts</span>

      {searchResult.map((result) => (
        <AccountHost key={result.id} data={result} />
      ))}
      {isSeeAll ? (
        <span className={cx('footer')} onClick={() => setStatusView('less')}>
          See less
        </span>
      ) : (
        <span className={cx('footer')} onClick={() => setStatusView('more')}>
          See all
        </span>
      )}
    </div>
  );
}

export default SuggestHosts;

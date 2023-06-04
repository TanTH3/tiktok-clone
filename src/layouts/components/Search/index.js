import { useState, useEffect, useRef } from 'react';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchService from '~/services/searchService';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/Hooks';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchService.search(debouncedValue);
      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleClearSearchValue = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };
  const handleHideSearchResult = () => {
    setShowResults(false);
  };

  const handSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResults && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-results')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem
                  key={result.id}
                  data={result}
                  onClick={() => {
                    setSearchResult([]);
                    setSearchValue('');
                  }}
                />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideSearchResult}
      >
        <div className={cx('search')}>
          <input
            onFocus={() => setShowResults(true)}
            ref={inputRef}
            type="text"
            placeholder="Tìm Kiếm"
            value={searchValue}
            onChange={handleChange}
            required
          />
          <button className={cx('clear')} onClick={handleClearSearchValue}>
            {!loading && <FontAwesomeIcon icon={faCircleXmark} />}
          </button>
          {loading && (
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          )}
          <button className={cx('search-btn')} onMouseDown={handSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;

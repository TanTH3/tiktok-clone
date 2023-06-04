import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SuggestHosts.module.scss';
import Image from '~/components/Image';
import { TickBlueIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountHost({ data, onClick }) {
    const likRef = useRef();

    const renderPreview = (attrs) => {
        return (
            <>
                <div tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <AccountPreview data={data} />
                    </PopperWrapper>
                </div>
            </>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[500, 0]}
                render={renderPreview}
                placement="bottom"
            >
                <Link
                    ref={likRef}
                    to={`/@${data.nickname}`}
                    className={cx('Item')}
                    state={{ data: data.nickname }}
                >
                    <Image
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.last_name}
                        fallback="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                    />
                    <div className={cx('info')} onClick={onClick}>
                        <p className={cx('user-name')}>
                            <span>{data.nickname}</span>
                            {data.tick && (
                                <span className={cx('check')}>
                                    <TickBlueIcon />
                                </span>
                            )}
                        </p>
                        <span className={cx('real-name')}>
                            {data.full_name}
                        </span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountHost.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default AccountHost;

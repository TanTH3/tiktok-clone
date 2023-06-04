import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Content from '~/components/Content';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <Content />
            </div>
        </div>
    );
}

export default Home;

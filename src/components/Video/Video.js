import {
    forwardRef,
    useImperativeHandle,
    useRef,
    useLayoutEffect,
} from 'react';
import { useDebounce } from '~/Hooks';

import classNames from 'classnames/bind';

import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function Video(props, ref) {
    const clipRef = useRef();

    const debouncedValue = useDebounce(props.currentVolume, 100);

    console.log(props.src);

    useLayoutEffect(() => {
        if (typeof clipRef === 'object') {
            clipRef.current.volume = debouncedValue;
            console.log(clipRef.current.volume);
        }
    }, [debouncedValue]);

    useImperativeHandle(ref, () => ({
        play() {
            clipRef.current.play();
        },
        pause() {
            clipRef.current.pause();
        },
    }));

    return <video className={cx('video')} src={props.src} ref={clipRef} />;
}

export default forwardRef(Video);

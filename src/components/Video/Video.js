import video1 from '~/assets/video/video1.mp4';
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

  console.log(typeof clipRef, clipRef, debouncedValue);

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

  return <video className={cx('video')} src={video1} ref={clipRef} />;
}

export default forwardRef(Video);

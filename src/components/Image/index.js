import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(
  (
    {
      className,
      fallback: customFallback = images.noImage,
      src,
      alt,
      ...props
    },
    ref,
  ) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  },
);

Image.propTypes = {
  classNames: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;

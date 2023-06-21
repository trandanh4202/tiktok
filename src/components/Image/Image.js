import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { forwardRef } from 'react';
import images from '~/assets/images';
import styles from '~/components/Image/Image.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
  const [fallback, setFallback] = useState(``);
  const handleError = () => {
    setFallback(images.defaultAvatar);
  };
  return <img className={cx('wrapper', className)} ref={ref} src={fallback || src} {...props} onError={handleError} />;
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
export default Image;

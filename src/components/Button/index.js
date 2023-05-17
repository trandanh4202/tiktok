import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  text = false,
  primary = false,
  outline = false,
  small = false,
  large = false,
  rounded = false,
  disabled = false,
  children,
  className,
  onClick,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'fuction') {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}> {children} </span>
    </Comp>
  );
}

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const AccountPreview = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a6ff6a0bfa0ab28780301fee630fb3ea.jpeg?x-expires=1687496400&x-signature=iLOks5Vn9L6AIarZFoJoLb3eF50%3D"
          alt=""
        />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>Tran Danh 42</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}> Tran Trong Danh</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Followers </span>
          <strong className={cx('value')}>9.9M </strong>
          <span className={cx('label')}>Likes </span>
        </p>
      </div>
    </div>
  );
};

export default AccountPreview;

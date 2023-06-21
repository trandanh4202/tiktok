import React from 'react';
import PropTypes from 'prop-types';
import styles from './SuggestAccounts.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);

const AccountItem = () => {
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <Tippy interactive delay={[800, 0]} placement="bottom" render={renderPreview} offset={[-20, 0]}>
      <div className={cx('account-item')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9b1e39e32c3e52337bff16ae73b0ce4a~c5_100x100.jpeg?x-expires=1687456800&x-signature=NFLcOvI7sh79HuZJAr%2BvhU9Y3gM%3D"
          alt=""
        />
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>Tran Danh 42</strong>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          </p>
          <p className={cx('name')}> Tran Trong Danh</p>
        </div>
      </div>
    </Tippy>
  );
};

export default AccountItem;

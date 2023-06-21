import React from 'react';
import PropTypes from 'prop-types';
import styles from './SuggestAccounts.module.scss';
import classNames from 'classnames/bind';
import AcountItem from './AccountItem';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
const SuggestAccounts = ({ label }) => {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />

      <p className={cx('more-btn')}>see all</p>
    </div>
  );
};

SuggestAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestAccounts;

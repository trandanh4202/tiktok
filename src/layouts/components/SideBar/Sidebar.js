import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import MenuItem from './Menu/MenuItem';
import Menu from './Menu/Menu';
import config from '~/components/config/Config';
import {
  HomeIcon,
  HomeIconActive,
  LiveIcon,
  LiveIconActive,
  UserGroupIcon,
  UserGroupIconActive,
} from '~/components/icons/Icon';
import SuggestAccounts from '~/components/SuggestAccount/SuggestAccounts';
const cx = classNames.bind(styles);

function SideBar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="for you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
        <MenuItem
          title="following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupIconActive />}
        />
        <MenuItem title="live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
      </Menu>
      <SuggestAccounts label="suggested accounts" />
    </aside>
  );
}

export default SideBar;

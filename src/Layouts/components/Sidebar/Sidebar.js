import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItems } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    CompassIcon,
    CompassActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    UserIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SugestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                    title="For You"
                    to={config.routes.home}
                />
                <MenuItems
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                    title="Following"
                    to={config.routes.following}
                />
                <MenuItems
                    icon={<CompassIcon />}
                    activeIcon={<CompassActiveIcon />}
                    title="Discover"
                    to={config.routes.upload}
                />
                <MenuItems icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} title="Live" to={config.routes.live} />
                <MenuItems icon={<UserIcon />} title="Profile" to={config.routes.profile} />
            </Menu>
            <SuggestedAccounts label="Suggest Account" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;

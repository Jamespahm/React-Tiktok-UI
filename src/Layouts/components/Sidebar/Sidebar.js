import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItems } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

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
                <MenuItems icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} title="Live" to={config.routes.live} />
            </Menu>
        </aside>
    );
}

export default Sidebar;

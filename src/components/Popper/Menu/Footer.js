import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { TbLogout2 } from 'react-icons/tb';

const cx = classNames.bind(style);

function Footer({ title, LogOut }) {
    return (
        <footer className={cx('footer')}>
            <button className={cx('logout-btn')} onClick={LogOut}>
                <TbLogout2 />
            </button>
            <h4 className={cx('footer-title')}>{title}</h4>
        </footer>
    );
}

export default Footer;

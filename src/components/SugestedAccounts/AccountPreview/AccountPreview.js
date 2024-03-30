import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="
                    https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/336890842_155564654057454_450815515754258530_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEkGA5X_cJX3hPrCmTLD8G-telkxYALbhS16WTFgAtuFOMKjjppdjyciPRQFr6SU9rpfTE1nP5PX3EaeW7bVQwK&_nc_ohc=rdWXMabR078AX8K2Cfi&_nc_zt=23&_nc_ht=scontent.fhan5-3.fna&oh=00_AfAPx_3Hx4XuO7vTqCZvq7bMurFbPrDoO8HP5EqbzCocww&oe=660D5A83"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>jamespahm</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Phạm Huy Hoàng</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;

import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="
                        https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/336890842_155564654057454_450815515754258530_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEkGA5X_cJX3hPrCmTLD8G-telkxYALbhS16WTFgAtuFOMKjjppdjyciPRQFr6SU9rpfTE1nP5PX3EaeW7bVQwK&_nc_ohc=rdWXMabR078AX8K2Cfi&_nc_zt=23&_nc_ht=scontent.fhan5-3.fna&oh=00_AfAPx_3Hx4XuO7vTqCZvq7bMurFbPrDoO8HP5EqbzCocww&oe=660D5A83"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>jamespahm</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Phạm huy Hoàng</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

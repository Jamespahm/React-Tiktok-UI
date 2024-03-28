import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional

import { IoLanguage, IoEllipsisVertical, IoSettingsOutline } from 'react-icons/io5';
import { FaRegQuestionCircle, FaKeyboard } from 'react-icons/fa';
import { TbPlus, TbLogout2 } from 'react-icons/tb';
import { FiBookmark } from 'react-icons/fi';
import { RiUserLine, RiLiveLine } from 'react-icons/ri';

import config from '~/config/routes';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import { InboxIcon, MessageIcon } from '~/components/Icons';

const cx = classNames.bind(style);

const MENU_ITEMS = [
    {
        icon: <IoLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    // children: {
                    //     title: 'language',
                    //     data: [
                    //         {
                    //             code: 'en',
                    //             title: 'English 1',
                    //             children: {
                    //                 title: 'language',
                    //                 data: [
                    //                     {
                    //                         code: 'en',
                    //                         title: 'English 2',
                    //                     },
                    //                     {
                    //                         code: 'vi',
                    //                         title: 'Tiếng Việt',
                    //                     },
                    //                     {
                    //                         code: 'ja',
                    //                         title: '日本語',
                    //                     },
                    //                 ],
                    //             },
                    //         },
                    //         {
                    //             code: 'vi',
                    //             title: 'Tiếng Việt',
                    //         },
                    //         {
                    //             code: 'ja',
                    //             title: '日本語',
                    //         },
                    //     ],
                    // },
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: '日本語',
                },
            ],
        },
    },
    {
        icon: <FaRegQuestionCircle />,
        title: 'Feedback & help',
        to: '/feedback',
    },
    {
        icon: <FaKeyboard />,
        title: 'Keyboard & shortcuts',
    },
];

const USER_MENU = [
    {
        icon: <RiUserLine />,
        title: 'View profile',
        to: '/feedback',
    },
    {
        icon: <FiBookmark />,
        title: 'Favourite',
        to: '/favourite',
    },
    {
        icon: <RiLiveLine />,
        title: 'Live studio',
        to: '/feedback',
    },
    {
        icon: <IoSettingsOutline />,
        title: 'Settings',
        to: '/feedback',
    },
    ...MENU_ITEMS,
    {
        icon: <TbLogout2 />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    const handleMenuChange = (MenuItems) => {
        console.log(MenuItems);
    };
    const currentUser = false;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.home} className={cx('logo')}>
                    <img src={images.logo} alt="logo tiktok " />
                </Link>

                {/* SEARCH */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <div className={cx('current-user')}>
                                <Button squared leftIcon={<TbPlus />}>
                                    Upload
                                </Button>
                                <Tippy content="message">
                                    <button className={cx('message-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy content="inbox">
                                    <button className={cx('inbox-btn')}>
                                        <InboxIcon />
                                    </button>
                                </Tippy>

                                <Menu items={USER_MENU} onChange={handleMenuChange}>
                                    <Image
                                        className={cx('avatar-btn')}
                                        src="https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/404494228_1100414251142275_2985755135866774625_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEK4alrqera-qGT85wvfbrcfYePbq_zSr19h49ur_NKvRaVpOh6ee6-O1tPguOawHOQ7jzuMv3r1zWdsdAoE_lz&_nc_ohc=lVCT_lUn0dgAX9a0LII&_nc_ht=scontent.fhph2-1.fna&oh=00_AfC8szRr6v4LDSBsPqLVjShFdpmpz9vLFHf3Q2rV4-UxPQ&oe=65FAFA9F"
                                    />
                                </Menu>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>

                            <Button primary>Login</Button>

                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <IoEllipsisVertical />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;

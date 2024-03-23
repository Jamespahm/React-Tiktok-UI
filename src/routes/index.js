//Layouts
import { HeaderOnly } from '~/components/Layouts';
import config from '~/config/routes';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Shop from '~/pages/Shop';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';

const publicRoutes = [
    { path: config.home, component: Home },
    { path: config.following, component: Following, layout: null },
    { path: config.profile, component: Profile },
    { path: config.upload, component: Upload },
    { path: config.shop, component: Shop, layout: HeaderOnly },
    { path: config.search, component: Search, layout: HeaderOnly },
    { path: config.live, component: Live, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };

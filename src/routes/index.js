//Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Shop from '~/pages/Shop';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following, layout: null },
    { path: '/shop', component: Shop, layout: HeaderOnly },
    { path: '/search', component: Search, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };

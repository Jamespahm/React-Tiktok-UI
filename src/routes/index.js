//Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Shop from '~/pages/Shop';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following, layout: null },
    { path: '/shop', component: Shop, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };

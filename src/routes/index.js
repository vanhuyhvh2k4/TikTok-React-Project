import { OnlyHeader } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import Watch from '~/pages/Watch';
import config from '~/config';
import DefaultLayoutLarge from '~/layouts/DefaultLayoutLarge';

const publicRoutes =  [
    {
        path: config.routes.home,
        compoment: Home
    },

    {
        path: config.routes.watch,
        compoment: Watch,
        layout: null
    },

    {
        path: config.routes.following,
        compoment: Following
    },

    {
        path: config.routes.upload,
        compoment: Upload,
        layout: OnlyHeader
    },

    {
        path: config.routes.search,
        compoment: Search,
        layout: null
    },
    {
        path: config.routes.live,
        compoment: Live,
        layout: DefaultLayoutLarge
    },
    {
        path: config.routes.profile,
        compoment: Profile,
    },
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}
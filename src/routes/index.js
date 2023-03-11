import { OnlyHeader } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import config from '~/config';

const publicRoutes =  [
    {
        path: config.routes.home,
        compoment: Home
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
        path: config.routes.profile,
        compoment: Profile,
    },
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}
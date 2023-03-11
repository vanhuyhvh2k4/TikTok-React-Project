import { OnlyHeader } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import routesConfig from '~/config/routes'

const publicRoutes =  [
    {
        path: routesConfig.home,
        compoment: Home
    },

    {
        path: routesConfig.following,
        compoment: Following
    },

    {
        path: routesConfig.upload,
        compoment: Upload,
        layout: OnlyHeader
    },

    {
        path: routesConfig.search,
        compoment: Search,
        layout: null
    },
    {
        path: routesConfig.profile,
        compoment: Profile,
    },
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}
import { OnlyHeader } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes =  [
    {
        path: '/',
        compoment: Home
    },

    {
        path: '/following',
        compoment: Following
    },

    {
        path: '/upload',
        compoment: Upload,
        layout: OnlyHeader
    },

    {
        path: '/search',
        compoment: Search,
        layout: null
    },
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}
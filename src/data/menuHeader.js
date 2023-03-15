const { faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const data = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'VietNamese'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcut',
    },
]



export const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser}/>,
        title: 'View Profile',
        to: '/@vanhuy'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins}/>,
        title: 'Get Coins',
        to: '/coin'
    },
    {
        icon: <FontAwesomeIcon icon={faGear}/>,
        title: 'Settings',
        to: '/settings'
    },
    ...data,
    {
        icon: <FontAwesomeIcon icon={faSignOut}/>,
        title: 'Log Out',
        to: '/logout',
        separate: true,
    },
]

export default data;
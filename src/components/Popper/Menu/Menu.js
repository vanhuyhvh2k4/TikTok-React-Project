import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Popper'
import Header from "./Header";
import styles from './Menu.module.scss';
import MenuItem from "./MenuItem";
import * as authService from '~/services/authService';
import { useDispatch, useSelector } from "react-redux";
const cx = classNames.bind(styles);

const defaultFn = () => {}

function Menu({ children , items = [], onChange = defaultFn, hideOnClick = false }) {

    const user = useSelector(state => state.auth.login.currentUser);
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const dispatch = useDispatch();

    const renderItems = () => {
        return current.data.map((item, index) => 
        {
            const isHandle = item.handle;
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                }
                else if (isHandle) {
                    const fetchApi = async () => {
                        const response = await authService.logoutUser(dispatch, user?.access_token)
                        console.log(response)
                    }
                    fetchApi();
                    }
                    else {
                        onChange(item)
                    }
            }}/>
        }
        )
    }

    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }
    
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack}></Header>}
                <div className={cx('menu-body')}>
                    {renderItems()}
                </div>
            </PopperWrapper>
        </div>
    )

    const handleResetToFirstPage = () => {
        setHistory(prev => prev.slice(0, 1))
    }

    return ( 
        <Tippy
                    hideOnClick={hideOnClick}
                    offset={[12, 12]}
                    onHide={handleResetToFirstPage}
                    delay={[0, 500]}
                    interactive
                    // check if have search result => display
                    placement='bottom-end'
                    render={renderResult}>
                    {children}
                </Tippy>
     );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
}

export default Menu;
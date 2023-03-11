import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";

import { Wrapper as PopperWrapper } from '~/components/Popper'
import Header from "./Header";
import styles from './Menu.module.scss';
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);

const defaultFn = () => {}

function Menu({ children , items = [], onChange = defaultFn, hideOnClick = false }) {

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    
    const renderItems = () => {
        return current.data.map((item, index) => 
        {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                }
                else {
                    onChange(item);
                }
            }}/>
        }
        )
    }
    
    return ( 
        <Tippy
                    hideOnClick={hideOnClick}
                    offset={[12, 12]}
                    onHide={() => {setHistory(prev => prev.slice(0, 1))}}
                    delay={[0, 500]}
                    interactive
                    // check if have search result => display
                    placement='bottom-end'
                    render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && <Header title='Language' onBack={() => {
                                setHistory(prev => prev.slice(0, prev.length - 1))
                            }}></Header>}
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                )}>
                    {children}
                </Tippy>
     );
}

export default Menu;
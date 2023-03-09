import Tippy from "@tippyjs/react/headless";
import classNames from "classnames";

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Menu.module.scss';
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);

function Menu({ children , items = [] }) {
    
    const renderItems = () => {
        return items.map((item, index) => 
            <MenuItem key={index} data={item}/>
        )
    }
    
    return ( 
        <Tippy
                    delay={[0, 500]}
                    interactive
                    // check if have search result => display
                    placement='bottom-end'
                    render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                )}>
                    {children}
                </Tippy>
     );
}

export default Menu;
import classNames from "classnames/bind";
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer({ listData }) {
    return ( 
        <div className={cx('wrapper')}>
            <section>
                {listData.map((item) => {
                    if (item.hasOwnProperty('group_1')) {
                        return item.group_1.map((subItem, index) => (
                            <a key={index} href={subItem.link} target="_blank" rel="noopener noreferrer">{subItem.title}</a>
                        ))
                    }
                    return null;
                })}
            </section>
            <section>
            {listData.map((item) => {
                    if (item.hasOwnProperty('group_2')) {
                        return item.group_2.map((subItem, index) => (
                            <a key={index} href={subItem.link} target="_blank" rel="noopener noreferrer">{subItem.title}</a>
                        ))
                    }
                    return null;
                })}
            </section>
            <section>
            {listData.map((item) => {
                    if (item.hasOwnProperty('group_3')) {
                        return item.group_3.map((subItem, index) => (
                            <a key={index} href={subItem.link} target="_blank" rel="noopener noreferrer">{subItem.title}</a>
                        ))
                    }
                    return null;
                })}
            </section>
            <span>© 2023 TikTok</span>
        </div>
     );
}

export default Footer;
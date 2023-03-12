import classNames from "classnames/bind";
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return ( 
        <div className={cx('wrapper')}>
            <section>
                <a href="!#">About</a>
                <a href="!#">Newsroom</a>
                <a href="!#">Contact</a>
                <a href="!#">Careers</a>
                <a href="!#">ByteDance</a>
            </section>
            <section>
                <a href="!#">TikTok for Good</a>
                <a href="!#">Advertise</a>
                <a href="!#">Developers</a>
                <a href="!#">Transparency</a>
                <a href="!#">TikTok Rewards</a>
                <a href="!#">TikTok Browse</a>
                <a href="!#">TikTok Embeds</a>
            </section>
            <section>
                <a href="!#">Help</a>
                <a href="!#">Safety</a>
                <a href="!#">Terms</a>
                <a href="!#">Privacy</a>
                <a href="!#">Creator Portal</a>
                <a href="!#">Community Guidelines</a>
            </section>
                <span>© 2023 TikTok</span>
        </div>
     );
}

export default Footer;
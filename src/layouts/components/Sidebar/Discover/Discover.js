import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from './Discover.module.scss';
import DiscoverItem from "./DiscoverItem";
import * as discoverService from '~/services/discoverService';

const cx = classNames.bind(styles);

function Discover() {

    const [discover, setDiscover] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await discoverService.discover();

            if (result) {
                const renamedResult = result.map(({ keyword_name: keywordName, keyword_type: keywordType }) => ({ keywordName, keywordType }));
                setDiscover(renamedResult);
            }
        };

        fetchApi();
    }, [])

    return ( 
        <div className={cx('wrapper')}>
            <header className={cx('title')}>Discover</header>
            <div className={cx('wrapper-items')}>
                {discover.map((data, index) => (
                    <DiscoverItem key={index} data={data}/>
                ))}
            </div>
        </div>
     );
}

export default Discover;
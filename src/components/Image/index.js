import classNames from 'classnames';

import { useState, forwardRef} from 'react'
import images from '~/assets/images';
import styles from './Image.module.scss'

 const Image = forwardRef(({fallback: customFallback = images.noImage, className, src, alt, ...props}, ref) => {
    const[fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback)
    }
    
    return <img className={classNames(styles.wrapper, className)} src={fallback || src} alt={alt} ref={ref} {...props} onError={handleError}/>
})

export default Image;
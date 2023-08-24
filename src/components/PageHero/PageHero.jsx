import classNames from "classnames/bind";
import styles from './PageHero.module.scss'
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
function PageHero({title,product}) {
    return (
       <>
            {product ? (
            <>
                <Link to='/product' className={cx('product-item')}>{title}</Link>
                <span>/</span> 
                <div className={cx('active','product-name')}>{product}</div>
            </>
            ) : (<>
                <div className={cx('active')}>{title}</div>
            </>)}
       </>
    );
}

export default PageHero;
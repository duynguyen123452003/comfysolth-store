import classNames from 'classnames/bind';
import styles from './ItemProduct.module.scss';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '../helps/formatPrice';
const cx = classNames.bind(styles);
function ItemProduct({ data }) {
  return (
    <Col className={cx('products-item')} lg={4} md={6} sm={12} xs={12} key={data.id}>
      <div className={cx('image-container')}>
        <img className={cx('products-img')} src={data.image} />
        <Link to={`/product/${data.id}`}>
          <div className={cx('seach')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('seach-icon')} />
          </div>
        </Link>
      </div>
      <div className={cx('products-title')}>
        <span className={cx('products-name')}>{data.name}</span>
        <span className={cx('products-price')}>{formatPrice(data.price)}</span>
      </div>
    </Col>
  );
}
export default ItemProduct;

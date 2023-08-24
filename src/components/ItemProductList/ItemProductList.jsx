import classNames from 'classnames/bind';
import styles from './ItemProductList.module.scss';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { formatPrice } from '../helps/formatPrice';
const cx = classNames.bind(styles);
function ItemProductList({ data }) {
  return (
    <Row className={cx('wrapper-product')}>
      <Col lg={4} md={5} sm={12} xs={12}>
        <div className="wrapper-img">
          <img src={data.image} className={cx('img')} />
        </div>
      </Col>
      <Col lg={8} md={7} sm={12} xs={12}>
        <div className={cx('product-content')}>
          <h2 className={cx('product-name')}>{data.name}</h2>
          <div className={cx('product-price')}>{formatPrice(data.price)}</div>
          <div className={cx('product-describe')}>{data.description}</div>
          <Link to={`/product/${data.id}`}>
            <button className={cx('product-btn-details')}>DETAILS</button>
          </Link>
        </div>
      </Col>
    </Row>
  );
}

export default ItemProductList;

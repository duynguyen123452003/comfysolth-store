import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './FeaturedProducts.module.scss';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import LoadingFeauredProducts from '../LoadingFeauredProducts/LoadingFeauredProducts';
import ItemProduct from '../ItemProduct/ItemProduct.jsx';
const cx = classNames.bind(styles);

function FeaturedProducts() {
  const [datas, setDatas] = useState([]);
  const fetchData = () => {
    fetch('https://course-api.com/react-store-products')
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      })
      .catch(() => {
        return
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={cx('featured-products')}>
      <Row className={cx('products-heading')}>
        <Col lg={12} md={12} sm={12} xs={12}>
          <span>Featured Products</span>
        </Col>
      </Row>
      <Row>
        {datas.length > 0 ? datas.slice(0, 3).map((data) => <ItemProduct data={data} key={data.id}/>) : <LoadingFeauredProducts />}
      </Row>
      <Row className={cx('btn-products')}>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Link to="/product">
            <button className={cx('btn-all')}>ALL PRODUCTS</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default FeaturedProducts;

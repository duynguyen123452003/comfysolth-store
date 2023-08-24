import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import images from '../../assets/images/index'
import { Row, Col } from 'react-bootstrap';
const cx = classNames.bind(styles);
function Hero() {
  return (
    <div className={cx('wrapper')}>
      <Row>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={cx('wrapper-content')}>
            <header className={cx('design-heading')}>
              Design Your
              <br />
              Comfort Zone
            </header>
            <div className={cx('design-text')}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus
              velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
            </div>
            <Link to="/product">
              <button className={cx('btn-shopw_now')}>SHOP NOW</button>
            </Link>
          </div>
        </Col>
        <Col lg={6} md={0} sm={0} xs={0} className={cx('image')}>
          <div className={cx('image-list')}>
            <img className={cx('image-first_item')} src={images.homeImageDesignFirst} />
            <img className={cx('image-second_item')} src={images.homeImageDesignSecond} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;

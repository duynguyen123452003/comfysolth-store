import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../assets/images';
import { faBars, faCartShopping, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
const cx = classNames.bind(styles);
function Header() {
  const [yourCart, setYourCart] = useState([]);
  //handler navbar mobile
  const [isNavbar, setIsNavbar] = useState('');
  const handleBarOpen = () => {
    setIsNavbar('navbar-open')
  }
  const handleBarClose = () => {
    setIsNavbar('navbar-close');
  };

  //set yourCart
  useEffect(() => {
    setTimeout(() => {
      const datas = JSON.parse(localStorage.getItem('carts'));
      if (datas) {
        setYourCart(datas);
      }
    }, 100);
  }, [yourCart]);
  return (
    <nav className={cx('wrapper')}>
      <Container fluid>
        <Row>
          <Col lg={4} md={4} sm={4} xs={4}>
            <Link to="/">
              <img src={images.logo} className={cx('logo')} />
            </Link>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <ul className={cx('nav-list')}>
              <Link to="/">
                <li className={cx('nav-item')}>Home</li>
              </Link>
              <Link to="/about">
                <li className={cx('nav-item')}>About</li>
              </Link>
              <Link to="/product">
                <li className={cx('nav-item')}>Poducts</li>
              </Link>
            </ul>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <div className={cx('action')}>
              <button className={cx('bar-icon')} onClick={() => handleBarOpen()}>
                <FontAwesomeIcon icon={faBars} />
              </button>
              <Fragment>
                <Link to="/cart">
                  <div className={cx('action-item')}>
                    <span className={cx('cart')}>Cart</span>
                    <FontAwesomeIcon icon={faCartShopping} className={cx('action-icon')} />
                    <div className={cx('cart-number')}>{yourCart.length}</div>
                  </div>
                </Link>
                <div className={cx('action-item')}>
                  <span>Login</span>
                  <FontAwesomeIcon icon={faUserPlus} className={cx('action-icon')} />
                </div>
              </Fragment>
            </div>
          </Col>
        </Row>
        {
          //Navbar mobile
        }
        <NavbarMobile isNavbar={isNavbar} handleBarClose={handleBarClose} yourCart={yourCart}/>
      </Container>
    </nav>
  );
}

export default Header;

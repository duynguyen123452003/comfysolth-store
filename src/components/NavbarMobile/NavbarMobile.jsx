import classNames from 'classnames/bind';
import styles from './NavbarMoblie.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faXmark,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import images from '../../assets/images';
const cx = classNames.bind(styles);
function NavbarMobile({isNavbar,handleBarClose,yourCart}) {
  return (
    <div className={cx('wrapper-navbar', isNavbar)} id="navbar">
      <div className={cx('navbar-header')}>
        <Link to="/">
          <img src={images.logo} className={cx('nav-mobile_logo')} />
        </Link>
        <button className={cx('btn-close')}>
          <FontAwesomeIcon icon={faXmark} onClick={() => handleBarClose()}/>
        </button>
      </div>
      <div className={cx('nav-mobile')}>
        <ul className={cx('nav-mobile_list')}>
          <Link to="/">
            <li className={cx('nav-mobile_item')} onClick={() => handleBarClose()}>
              <span className={cx('nav-content')}>Home</span>
            </li>
          </Link>
          <Link to="/about">
            <li className={cx('nav-mobile_item')} onClick={() => handleBarClose()}>
              <span className={cx('nav-content')}>About</span>
            </li>
          </Link>
          <Link to="/product">
            <li className={cx('nav-mobile_item')} onClick={() => handleBarClose()}>
              <span className={cx('nav-content')}>Products</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className={cx('action-mobile')}>
        <div className={cx('action-mobile-item')}>
          <Link to="/cart" onClick={() => handleBarClose()}>
            <span className={cx('cart-mobile')}>Cart</span>
            <FontAwesomeIcon icon={faCartShopping} className={cx('mobile_icon')} />
            <div className={cx('cart-mobile_number')}>{yourCart.length}</div>
          </Link>
        </div>
        <div className={cx('action-mobile-item')}>
          <span>Login</span>
          <FontAwesomeIcon icon={faUserPlus} className={cx('mobile-icon')} />
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;

import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Fragment, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import SectionSrc from '../../components/SectionSrc/SectionSrc';
import { formatPrice } from '../../components/helps/formatPrice';
const cx = classNames.bind(styles);
function Cart() {
  const [yourCart, setYourCart] = useState([]);
  const [datas, setDatas] = useState([]);
  const [subtotal,setSubtotal] = useState(0)
  const shippingFe = 534;
  useEffect(() => {
    setYourCart(JSON.parse(localStorage.getItem('carts')) ?? []);
  }, []);

  //call API 22 product
  const fetchData = () => {
    fetch('https://course-api.com/react-store-products')
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      })
      .catch(() => {
        return;
      });
  };
  useEffect(() => {
    fetchData();
  }, []);


  //handler delete product
  const handleDelete = (id) => {
    yourCart.map((product, index) => {
      if (id === product.id) {
        yourCart.splice(index, 1);
        localStorage.setItem('carts', JSON.stringify(yourCart));
        setYourCart(JSON.parse(localStorage.getItem('carts')));
      }
    });
  };

  //handlel clear shopping cart
  const handleClearShopping = () => {
    localStorage.setItem('carts',JSON.stringify([]))
    setYourCart(JSON.parse(localStorage.getItem('carts')));
  };
  
  //handler remove add quantity
  const handleRemoveQuantity = (numStock,id) => {
    const isProduct = yourCart.find(product => product.id === id)
    if(isProduct){
      const cart = yourCart.map(item => {
        if(item.id === id){
          const newNumStock =  numStock <= 1  ? (1) : (numStock - 1);
          return {
            ...item,
            numStock: newNumStock,
            subtotal: newNumStock * item.price
          }
        }
        return item
      })
      setYourCart(cart)
      localStorage.setItem('carts',JSON.stringify(cart))
    }
  }

  //handler click add quantity
  const handleAddQuantity = (numStock,id) => {
    const isProduct = yourCart.find(product => product.id === id)
    if(isProduct){
      const cart = yourCart.map(item => {
        if(item.id === id){
          const newNumStock = numStock >= item.maxStock   ? (numStock) : (numStock + 1);
          return {
            ...item,
            numStock: newNumStock,
            subtotal: newNumStock * item.price
          }
        }
        return item
      })
      setYourCart(cart)
      localStorage.setItem('carts',JSON.stringify(cart))
    }
  }

  //function sum subtotal
  useEffect(() => {
    var subtotal = 0
    yourCart.map(product => {
      subtotal = subtotal + product.subtotal
    })
    setSubtotal(subtotal)
  },[yourCart])

  return yourCart.length <= 0 ? (
    <div className={cx('wrapper', 'wrapper-cart_empty')}>
      <h1 className={cx('empty-cart_title')}>Your cart is empty</h1>
      <Link to="/product">
        <button className={cx('btn-fill')}>FILL IT</button>
      </Link>
    </div>
  ) : (
    <Fragment>
      <div className={cx('wrapper-cart_list')}>
        <SectionSrc title={'Cart'} />
      </div>
      <div className={cx('wrapper-cart')}>
        <div className={cx('content')}>
          <div className={cx('content-item')}>Item</div>
          <div className={cx('content-item')}>Price</div>
          <div className={cx('content-item')}>Quantity</div>
          <div className={cx('content-item')}>Subtotal</div>
        </div>
        <hr className={cx('hr-heading')} />
        {yourCart.map((product, index) => {
          const data = datas.find((data) => data.id === product.id);
          if (data) {
            return (
              <div className={cx('cart-item')} key={index}>
                <div className={cx('item')}>
                  <img src={data.image} className={cx('img')} />
                  <div>
                    <div className={cx('name')}>{data.name}</div>
                    <div className={cx('color')}>
                      <span className={cx('color-title')}>Color :</span>
                      <span className={cx('color-item')} style={{ backgroundColor: product.color }}></span>
                    </div>
                    <div className={cx('price-mobile')}>{formatPrice(data.price)}</div>
                  </div>
                </div>
                <div className={cx('price')}>{formatPrice(data.price)}</div>
                <div className={cx('quantity')}>
                  <button 
                    className={cx('remove-quantity')}
                    onClick={() => handleRemoveQuantity(product.numStock > product.maxStock ? product.maxStock : product.numStock,product.id)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className={cx('num-quantity')}>
                    {product.numStock > product.maxStock ? product.maxStock : product.numStock}
                  </span>
                  <button 
                    className={cx('add-quantity')}
                    onClick={() => handleAddQuantity(product.numStock > product.maxStock ? product.maxStock : product.numStock,product.id)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className={cx('subtotal')}>{formatPrice(product.subtotal)}</div>
                <div>
                  <button className={cx('btn-delete')} onClick={() => handleDelete(product.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            );
          }
        })}
        <hr />
        <div className={cx('wrapper-btn')}>
          <Link to="/product">
            <button className={cx('continue-shopping')}>Continue Shopping</button>
          </Link>
          <button className={cx('clear-shopping')} onClick={() => handleClearShopping()}>
            Clear Shopping Cart
          </button>
        </div>
        <div className={cx('wrapper-total')}>
          <div className={cx('total-price')}>
            <div className={cx('subtotal')}>
              <span className={cx('subtotal-title')}>Subtotal :</span>
              <span className={cx('subtotal-price')}>{formatPrice(subtotal)}</span>
            </div>
            <div className={cx('shipping')}>
              <span className={cx('shipping-title')}>Shipping Fee :</span>
              <span className={cx('shipping-price')}>{formatPrice(shippingFe)}</span>
            </div>
            <hr />
            <div className={cx('oder-total')}>
              <span className={cx('oder-title')}>Order Total :</span>
              <span className={cx('oder-price')}>{formatPrice(subtotal + shippingFe)}</span>
            </div>
          </div>
        </div>
        <div className={cx('wrapper-btn_loggin')}>
          <button className={cx('btn-login')}>LOGIN</button>
        </div>
      </div>
    </Fragment>
  );
}

export default Cart;

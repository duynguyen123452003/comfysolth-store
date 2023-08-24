import classNames from 'classnames/bind';
import styles from './ContentInformation.module.scss';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke, faStar as faStarTrans } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function ContentInformation({ datas }) {
  const [activeColor, setActiveColor] = useState(datas.colors[0]);
  const [numStock,setNumStock] = useState(1)
  const [carts,setCarts] = useState([...JSON.parse(localStorage.getItem('carts')) ?? []])

  const navigate = useNavigate()
  const handleClickAddProductCart = (product) => {
    if(carts.length === 0){
      setCarts((prevs) => [...prevs,product])
    }else{
      const isProduct = carts.find(cart => cart.id === product.id && cart.color === product.color)
      if(isProduct){
        const cart = carts.map(item=> {
          if(item.id === product.id && item.color === product.color){
            return {
              ...item,
              numStock: (item.numStock + product.numStock) >= product.maxStock ? (product.maxStock) : (item.numStock + product.numStock)
            }
          } 
          return item
        })
        setCarts(cart)
      }else{
        setCarts((prevs) => [...prevs,product])
      }
    }
    setTimeout(() => {
      navigate('/cart')
    },100)
  }
  useEffect(() => {
    localStorage.setItem('carts',JSON.stringify(carts))
  },[carts])


  const handleClickAdd = () => {
    if(numStock < datas.stock){
        setNumStock(numStock + 1)
    }
  }
  const handleClickRemove = () => {
    if(numStock > 1){
        setNumStock(numStock - 1)
    }
  }
  const arrStars = [1, 2, 3, 4, 5];
  return (
    <Col lg={6} md={12} sm={12} xs={12}>
      <div className={cx('wrapper-information')}>
        <h1 className={cx('name-product')}>{datas.name}</h1>
        <div className={cx('numStar')}>
          {arrStars.map((arr) =>
            Number.isInteger(datas.stars) ? (
              arr <= datas.stars ? (
                <FontAwesomeIcon className={cx('star-icon')} icon={faStar} key={arr} />
              ) : (
                <FontAwesomeIcon className={cx('star-icon')} icon={faStarTrans} key={arr} />
              )
            ) : datas.stars.toFixed() > datas.stars ? (
              arr <= datas.stars.toFixed() ? (
                <FontAwesomeIcon className={cx('star-icon')} icon={faStar} key={arr} />
              ) : (
                <FontAwesomeIcon className={cx('star-icon')} icon={faStarTrans} key={arr} />
              )
            ) : arr <= datas.stars.toFixed() ? (
              <FontAwesomeIcon className={cx('star-icon')} icon={faStar} key={arr} />
            ) : arr - datas.stars < 1 ? (
              <FontAwesomeIcon className={cx('star-icon')} icon={faStarHalfStroke} key={arr} />
            ) : (
              <FontAwesomeIcon className={cx('star-icon')} icon={faStarTrans} key={arr} />
            ),
          )}
          <span className={cx('num-customer')}>{'(' + datas.reviews + ' customer reviews)'}</span>
        </div>
        <h2 className={cx('price')}>{'$' + datas.price.toLocaleString()}</h2>
        <div className={cx('content')}>{datas.description}</div>
        <div className={cx('infor')}>
          <span className={cx('infor-title')}>Available:</span>
          <span className={cx('infor-content')}>{datas.stock > 0 ? 'In Stock' : 'Out Of Stock'}</span>
        </div>
        <div className={cx('infor')}>
          <span className={cx('infor-title')}>SKU:</span>
          <span className={cx('infor-content')}>{datas.id}</span>
        </div>
        <div className={cx('infor')}>
          <span className={cx('infor-title')}>Brand:</span>
          <span className={cx('infor-content')}>{datas.company}</span>
        </div>
        <hr className={cx('hr')} />
        {datas.stock > 0 ? (
          <Fragment>
            <div className={cx('color')}>
              <span className={cx('color-title')}>Colors :</span>
              <div className={cx('color-list')}>
                {datas.colors.map((color) => (
                  <span
                    className={cx('color-item', { active: activeColor === color })}
                    style={{ backgroundColor: color }}
                    onClick={() => setActiveColor(color)}
                    key={color}
                  >
                    <FontAwesomeIcon icon={faCheck} className={cx('icon-check')} />
                  </span>
                ))}
              </div>
            </div>
            <div className={cx('stock')}>
              <button className={cx('remove-product')} onClick={() => handleClickRemove()}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className={cx('num-stock')}>{numStock}</span>
              <button className={cx('add-product')} onClick={() => handleClickAdd()}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          {/*<Link>*/}
              <button 
                className={cx('btn-add')} 
                onClick={() => {
                  handleClickAddProductCart({
                    id: datas.id,
                    numStock: numStock,
                    maxStock: datas.stock,
                    color: activeColor,
                    subtotal: numStock * datas.price,
                    price: datas.price
                  })
                }}
              >
                ADD TO CART
              </button>
            {/*</Link>*/}
          </Fragment>
        ) : (
          <div className={cx('sold-out')}>
            <h1>Sold Out</h1>
          </div>
        )}
      </div>
    </Col>
  );
}

export default ContentInformation;

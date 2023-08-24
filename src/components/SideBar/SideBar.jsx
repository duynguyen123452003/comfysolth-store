import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Sidebar({ handleClickChange, handleClickClear}) {
  const [activeButtonCategory, setActiveButtonCategory] = useState('All');

  const [category, setCategory] = useState('All');
  const [compa, setCompa] = useState('All');
  const [color,setColor] = useState('All');
  const [price, setPrice] = useState(309999);
  const [freeShip, setFreeShip] = useState(false);


  useEffect(() => {
    handleClickChange(category, compa,color,price,freeShip);
  }, [category, compa, color,price,freeShip]);

  const handleClickCategory = (category) => {
    setActiveButtonCategory(category);
  };

  const [activeButtonColor, setActiveButtonColor] = useState('All');
  const handleClickColor = (color) => {
    setActiveButtonColor(color);
  };

  
  const handleRange = (e) => {
    setPrice(e.target.value);
  };


  const handleCheck = () => {
    setFreeShip(!freeShip);
  };

  const [company, setCompany] = useState(false);

  const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number / 100);
  };

  return (
    <Col lg={2} md={3} sm={12} xs={12}>
      <div className={cx('side-bar')}>
        <div className={cx('search')}>
          <input type="text" className={cx('search-input')} placeholder="Search" />
        </div>
        <div className={cx('category')}>
          <h3 className={cx('category-heading')}>Category</h3>
          <ul className={cx('category-list')}>
            <li className={cx('category-item')}>
              <button
                className={cx('btn-category', { active: activeButtonCategory === 'All' })}
                onClick={() => {
                  handleClickCategory('All');
                  setCategory('All');
                }}
              >
                All
              </button>
            </li>
            <li className={cx('category-item')}>
              <button
                className={cx('btn-category', { active: activeButtonCategory === 'Office' })}
                onClick={() => {
                  handleClickCategory('Office');
                  setCategory('Office');
                }}
              >
                Office
              </button>
            </li>
            <li className={cx('category-item')}>
              <button
                className={cx('btn-category', { active: activeButtonCategory === 'Living Room' })}
                onClick={() => {
                  handleClickCategory('Living Room');
                  setCategory('Living Room');
                }}
              >
                Living Room
              </button>
            </li>
            <li className={cx('category-item')}>
              <button
                className={cx('btn-category', { active: activeButtonCategory === 'Kitchen' })}
                onClick={() => {
                  handleClickCategory('Kitchen');
                  setCategory('Kitchen');
                }}
              >
                Kitchen
              </button>
            </li>
            <li className={cx('category-item')}>
              <button
                className={cx('btn-category', { active: activeButtonCategory === 'Bedroom' })}
                onClick={() => {
                  handleClickCategory('Bedroom');
                  setCategory('Bedroom');
                }}
              >
                Bedroom
              </button>
            </li>
            <li className={cx('category-item')}>
              <button
                className={cx('btn-category', { active: activeButtonCategory === 'Dining' })}
                onClick={() => {
                  handleClickCategory('Dining')
                  setCategory('Dining')
                }}
              >
                Dining
              </button>
            </li>
            <li className={cx('category-item')}>
              <button
                className={cx('btn-category', { active: activeButtonCategory === 'Kids' })}
                onClick={() => {
                  handleClickCategory('Kids')
                  setCategory('Kids')
                }}
              >
                Kids
              </button>
            </li>
          </ul>
        </div>
        <div className={cx('company')}>
          <h3 className={cx('company-heading')}>Company</h3>
          <select className={cx('company-select')} onChange={(e) => setCompa(e.target.value)}>
            <option className={cx('company-option')} defaultValue={company} value={'All'}>
              All
            </option>
            <option className={cx('company-option')} value={'Marcos'}>
              Marcos
            </option>
            <option className={cx('company-option')} value={'Liddy'}>
              Liddy
            </option>
            <option className={cx('company-option')} value={'Ikea'}>
              Ikea
            </option>
            <option className={cx('company-option')} value={'Caressa'}>
              Caressa
            </option>
          </select>
        </div>
        <div className={cx('color')}>
          <h3 className={cx('color-heading')}>Colors</h3>
          <ul className={cx('color-list')}>
            <li className={cx('color-item')}>
              <button
                className={cx('btn-color', { active: activeButtonColor === 'All' })}
                onClick={() => {
                  handleClickColor('All')
                  setColor('All')
                }}
              >
                All
              </button>
            </li>
            <li className={cx('color-item')}>
              <div
                className={cx('block-color', 'color-1', { activecolor: activeButtonColor === 0 })}
                onClick={() => {
                  handleClickColor(0)
                  setColor('#ff0000')
                }}
              >
                <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
              </div>
            </li>
            <li className={cx('color-item')}>
              <div
                className={cx('block-color', 'color-2', { activecolor: activeButtonColor === 1 })}
                onClick={() => {
                  handleClickColor(1)
                  setColor('#00ff00')
                }}
              >
                <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
              </div>
            </li>
            <li className={cx('color-item')}>
              <div
                className={cx('block-color', 'color-3', { activecolor: activeButtonColor === 2 })}
                onClick={() => {
                  handleClickColor(2)
                  setColor('#0000ff')
                }}
              >
                <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
              </div>
            </li>
            <li className={cx('color-item')}>
              <div
                className={cx('block-color', 'color-4', { activecolor: activeButtonColor === 3 })}
                onClick={() => {
                  handleClickColor(3)
                  setColor('#000')
                }}
              >
                <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
              </div>
            </li>
            <li className={cx('color-item')}>
              <div
                className={cx('block-color', 'color-5', { activecolor: activeButtonColor === 4 })}
                onClick={() => {
                  handleClickColor(4)
                  setColor('#ffb900')
                }}
              >
                <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
              </div>
            </li>
          </ul>
        </div>
        <div className={cx('price')}>
          <h3 className={cx('price-heading')}>Price</h3>
          <div className={cx('price-title')}>{formatPrice(price)}</div>
          <input
            type="range"
            className={cx('price-input')}
            min={0}
            max={309999}
            value={price}
            onChange={(e) => handleRange(e)}
          />
        </div>
        <div className={cx('freeship')}>
          <span className={cx('freeship-title')}>Free Shipping</span>
          <input
            className={cx('freeship-checkbox')}
            type="checkbox"
            checked={freeShip}
            onChange={() => handleCheck()}
          />
        </div>
        <div className={cx('clear-filter')}>
          <button
            className={cx('btn-clear')}
            onClick={() => {
              setActiveButtonCategory('All');
              setPrice(309999);
              setActiveButtonColor('All');
              setFreeShip(false);
              setCompany(true);
              setCategory('All')
              setColor('All')
              setCompa('All')
              handleClickClear()
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </Col>
  );
}

export default Sidebar;

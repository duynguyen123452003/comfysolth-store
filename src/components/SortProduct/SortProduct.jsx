import classNames from 'classnames/bind';
import styles from './SortProduct.module.scss';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGrip } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function SortProduct({handle,isHandle,numberProduct,handleSort}) {
  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
        <div className={cx('sort')}>
          <div className={cx('layout')}>
            <button
              className={cx('layout-btn', 'layout-grid_btn', { activelayout: isHandle === 'roomy' })}
              onClick={() => {
                handle('roomy');
              }}
            >
              <FontAwesomeIcon icon={faGrip} />
            </button>
            <button
              className={cx('layout-btn', 'layout-bars_btn', { activelayout: isHandle === 'list' })}
              onClick={() => {
                handle('list');
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className={cx('number-product')}>
            <span>{numberProduct} Products Found</span>
          </div>
          <hr className={cx('line')} />
          <div className={cx('sort-by')}>
            <span>Sort By</span>
            <select className={cx('sort-select')} onChange={(e) => handleSort(e.target.value)}>
              <option className={cx('sort-option')} value={'lowest'}>{'Price (Lowest)'}</option>
              <option className={cx('sort-option')} value={'highest'}>{'Price (Highest)'}</option>
              <option className={cx('sort-option')} value={'az'}>{'Name (A - Z)'}</option>
              <option className={cx('sort-option')} value={'za'}>{'Name (Z - A)'}</option>
            </select>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default SortProduct;

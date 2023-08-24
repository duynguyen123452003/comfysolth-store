import SectionSrc from '../../components/SectionSrc/SectionSrc';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Col, Row } from 'react-bootstrap';
import { Fragment } from 'react';
import Sidebar from '../../components/SideBar/SideBar';
import SortProduct from '../../components/SortProduct/SortProduct';
import { useEffect, useState } from 'react';
import ItemProduct from '../../components/ItemProduct/ItemProduct';
import ItemProductList from '../../components/ItemProductList/ItemProductList';
const cx = classNames.bind(styles);

function Product() {
  const [datas, setDatas] = useState([]);
  datas.sort((a, b) => {
    return b.price - a.price;
  });
  const [newDatas, setNewDatas] = useState([]);
  const [activeLayout, setActiveLayout] = useState('roomy');

  const handleClickChange = (cate, compa, colorProduct, price, freeShip) => {
    const listproduct = [];

    newDatas.map((data) => {
      if (
        (cate === 'All' ? true : cate.toLowerCase() == data.category) &&
        (compa === 'All' ? true : compa.toLowerCase() == data.company) &&
        (colorProduct === 'All' ? true : data.colors.includes(colorProduct)) &&
        price >= data.price &&
        (freeShip == true ? data.shipping == true : true)
      ) {
        listproduct.push(data);
      }
    });
    setDatas(listproduct);
  };

  const [sortBy, setSortBy] = useState('lowest');
  const handleSort = (sortby) => {
    setSortBy(sortby);
  };

  switch (sortBy) {
    case 'lowest':
      datas.sort((a, b) => {
        return b.price - a.price;
      });
      break;
    case 'highest':
      datas.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    case 'az':
      datas.sort((a, b) => {
        const n1 = a.name.toLowerCase()
        const n2 = b.name.toLowerCase()
        if(n1 > n2){
          return 1
        }
        if(n1 < n2){
          return -1
        }
        return 0
      });
      break;
    case 'za':
      datas.sort((a, b) => {
        const n1 = a.name.toLowerCase()
        const n2 = b.name.toLowerCase()
        if(n1 > n2){
          return -1
        }
        if(n1 < n2){
          return 1
        }
        return 0
      });
      break;
  }

  const handleChangeLayout = (layout) => {
    setActiveLayout(layout);
  };

  const handleClickClear = () => {
    setDatas(newDatas);
  };

  const fetchData = () => {
    fetch('https://course-api.com/react-store-products')
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setNewDatas(data);
      })
      .catch(() => {
        return;
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Fragment>
      <div className={cx('wrapper-product')}>
        <SectionSrc title={'Products'} />
      </div>
      <div className={cx('product')}>
        <Row>
          <Sidebar handleClickChange={handleClickChange} handleClickClear={handleClickClear} handleSort={handleSort} />
          <Col lg={10} md={9} sm={12} xs={12}>
            <div className={cx('list-product')}>
              <SortProduct
                handle={handleChangeLayout}
                isHandle={activeLayout}
                numberProduct={datas.length}
                handleSort={handleSort}
              />
              <Row>
                {activeLayout === 'roomy' ? (
                  datas.length > 0 ? (
                    datas.map((data) => <ItemProduct data={data} key={data.id} />)
                  ) : (
                    <h3>Sorry, please wait a moment...</h3>
                  )
                ) : datas.length > 0 ? (
                  datas.map((data) => <ItemProductList data={data} key={data.id} />)
                ) : (
                  <h3>Sorry, please wait a moment...</h3>
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Product;

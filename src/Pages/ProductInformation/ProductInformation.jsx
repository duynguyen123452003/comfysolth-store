import classNames from 'classnames/bind';
import styles from './ProductInformation.module.scss';
import SectionSrc from '../../components/SectionSrc/SectionSrc';
import { Row, Col } from 'react-bootstrap';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ContentInformation from '../../components/ContentInformation/ContentInformation';
import { useParams } from 'react-router-dom';
import LoadingFeauredProducts from '../../components/LoadingFeauredProducts/LoadingFeauredProducts';
const cx = classNames.bind(styles);
function ProductInformation() {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = () => {
    fetch(`https://course-api.com/react-store-single-product?id=${id}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
        setLoading(true);
      })
      .catch(() => {
        setLoading(!isLoading);
        return;
      });
  };
  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);
  return isLoading ? (
    <Fragment>
      <div className={cx('wrapper-product')}>
        <SectionSrc title={'Products'} product={datas.name} />
      </div>
      <div className={cx('wrapper', 'wrapper-information')}>
        <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
                <div className={cx('wrapper-btn_back')}>
                    <Link to='/product'>
                        <button className={cx('btn-back')}>
                            BACK TO PRODUCTS
                        </button>
                    </Link>
                </div>
            </Col>
        </Row>
        <Row>
          <ImageGallery datas={datas} />
          <ContentInformation datas={datas} />
        </Row>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className={cx('wrapper-product')}>
        <SectionSrc title={'Products'} product={datas.name} />
      </div>
      <div className={cx('wrapper', 'wrapper-information')}>
        <div className={cx('loading')}>
            <LoadingFeauredProducts/>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductInformation;

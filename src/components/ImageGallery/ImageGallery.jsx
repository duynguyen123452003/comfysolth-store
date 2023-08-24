import classNames from 'classnames/bind';
import styles from './ImageGallery.module.scss';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
const cx = classNames.bind(styles);
function ImageGallery({ datas }) {
  const [active, setActive] = useState(datas.images[0].id);
  const [img, setImg] = useState(datas.images[0].url);
  return (
    <Col lg={6} md={12} sm={12} xs={12}>
      <div className={cx('wrapper-image')}>
        <img src={img} className={cx('img')} />
        <div className={cx('gallery')}>
          <ul className={cx('gallery-list')}>
            {datas.images.map((image) => {
              return (
                <li
                  className={cx('gallery-item', { active: active === image.id })}
                  onClick={() => {
                    setActive(image.id);
                    setImg(image.url);
                  }}
                  key={image.id}
                >
                  <img src={image.url} className={cx('gallery-img')} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Col>
  );
}

export default ImageGallery;

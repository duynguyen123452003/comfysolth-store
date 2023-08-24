import classNames from 'classnames/bind';
import styles from './CustomFurniture.module.scss';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../../assets/images';
const cx = classNames.bind(styles);
function CustomFurniture() {
  const services = [
    {
      id: 1,
      icon: images.serviceIconOne,
      title: 'Misson',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
      id: 2,
      icon: images.serviceIconTwo,
      title: 'Visson',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
      id: 3,
      icon: images.serviceIconThree,
      title: 'History',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
  ];
  return (
    <div className={cx('wrapper-furniture')}>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <Row>
            <Col lg={6} md={6} sm={6} xs={6}>
              <span className={cx('title')}>Custom Furniture Built Only For You</span>
            </Col>
          </Row>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <span className={cx('content')}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non
            aliquam voluptates dolore aut vero consequuntur.
          </span>
        </Col>
      </Row>

      <div className={cx('service-wrapper')}>
        <Row>
          {services.map((service) => (
            <Col lg={4} md={6} sm={12} xs={12} className={cx('service')} key={service.id}>
              <div className={cx('service-item')}>
                <div className={cx('wrapper-icon')}>
                  <img className={cx('service-icon')} src={service.icon} />
                </div>
                <div className={cx('service-title')}>{service.title}</div>
                <div className={cx('service-text')}>{service.text}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default CustomFurniture;

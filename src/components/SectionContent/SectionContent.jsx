import classNames from 'classnames/bind';
import styles from './SectionContent.module.scss';
import { Col, Row } from 'react-bootstrap';
import images from '../../assets/images';
const cx = classNames.bind(styles);
function SectionContent() {
  return (
    <div className={cx('wrapper-section')}>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div className={cx('section-img')}>
            <img src={images.homeImageDesignFirst} className={cx('section-img_item')} alt='homeImageDesignFirst'/>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div className={cx('content')}>
              <div className={cx('heading')}> 
                    Our Story
              </div>
              <div className={cx('text')}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
              </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SectionContent;

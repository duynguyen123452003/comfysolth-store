import classNames from 'classnames/bind';
import styles from './SectionSrc.module.scss';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHero from '../PageHero/PageHero';
const cx = classNames.bind(styles);
function SectionSrc({ title, product }) {
  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
        <section className={cx('wrapper-section_src')}>
          <div className={cx('section-item_src')}>
            <Link to="/" className={cx('home')}>
              Home
            </Link>
            <span>/</span>
            {product ? <PageHero title={title} product={product} /> : <PageHero title={title} />}
          </div>
        </section>
      </Col>
    </Row>
  );
}

export default SectionSrc;

import classNames from "classnames/bind";
import styles from './LoadingFeauredProducts.module.scss'
import { Row, Col } from "react-bootstrap";
const cx = classNames.bind(styles)
function LoadingFeauredProducts() {
    return (
    <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
            <div className={cx('wrapper')}>
                <div className={cx('loading')}>

                </div>
            </div>
        </Col>
    </Row>
    );
}

export default LoadingFeauredProducts;
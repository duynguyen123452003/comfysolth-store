import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import { Col, Row } from "react-bootstrap";
const cx = classNames.bind(styles)
function Footer() {
    return (
        <footer className={cx('wrapper-footer')}>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className={cx('content')}>
                        © 2023 <span className={cx('comfysloth')}>ComfySloth</span> All rights reserved
                    </div>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
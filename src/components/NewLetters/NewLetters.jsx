import classNames from "classnames/bind";
import styles from './NewLetters.module.scss'
import { Row, Col } from "react-bootstrap";
const cx = classNames.bind(styles)
function NewLetters() {
    return (
        <div className={cx('wrapper')}>
            <Row className={cx('wrapper-newlatters')}>
                <Col lg={7} md={7} sm={12} xs={12}>
                    <div className={cx('heading')}>
                        Join our newsletter and get 20% off
                    </div>
                    <div className={cx('content')}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
                    </div>
                </Col>
                <Col lg={5} md={5} sm={12} xs={12}>
                    <div className={cx('email')}>
                        <div className={cx('email-item')}>
                            <input type="text" placeholder="Enter Email" className={cx('input')}/>
                            <button className={cx('btn-subcrise')}>Subscribe</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default NewLetters;
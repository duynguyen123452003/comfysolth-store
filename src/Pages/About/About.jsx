import classNames from 'classnames/bind';
import styles from './About.module.scss'
import SectionSrc from '../../components/SectionSrc/SectionSrc';
import SectionContent from '../../components/SectionContent/SectionContent';
const cx = classNames.bind(styles)
function About() {
    return (
        <div className={cx('wrapper-about')}>
            <SectionSrc title={"About"}/>
            <SectionContent/>
        </div>
    )
}
export default About;
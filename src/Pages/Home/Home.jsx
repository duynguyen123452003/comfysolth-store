import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../../components/Hero/Hero';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import CustomFurniture from '../../components/CustomFurniture/CustomFurniture';
import NewLetters from '../../components/NewLetters/NewLetters';
const cx = classNames.bind(styles);

function Home() {
  return (
    <Container fluid>
      <Hero/>
      <FeaturedProducts/>
      <CustomFurniture/>
      <NewLetters/>
    </Container>
  );
}
export default Home;

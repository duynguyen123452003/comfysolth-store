import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Product from './Pages/Product/Product.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Footer from './components/Footer/Footer.jsx';
import ProductInformation from './Pages/ProductInformation/ProductInformation.jsx';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductInformation />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

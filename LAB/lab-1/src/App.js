import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBanner from './components/HeroBanner';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <Header/>
      <HeroBanner/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;

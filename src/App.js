import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Loggingsignup from './Pages/Loggingsignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import Breadcrum from './Components/Breadcrum/Breadcrum';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid"/>}/>    
          <Route path='/product' element={<Product/>}>
              <Route path=':prpoductId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Loggingsignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

      
    </div>
  );
}

export default App;



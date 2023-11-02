
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product'
import Footer from './Components/Footer/Footer';
import dog_banner from './Components/Assets/dogbanner.jpg'
import cat_banner from './Components/Assets/catbanner.jpg'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/dogs' element={<ShopCategory banner={dog_banner} category="dog"/>}/>
        <Route path='/cats' element={<ShopCategory banner={cat_banner} category="cat"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}


  
export default App;

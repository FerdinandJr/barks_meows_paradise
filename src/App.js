
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

window.onload=function(){
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  window.onload=function(){
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
}
  
  document.querySelectorAll(".nav-link").forEach(n => n. 
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
  )
  };
  
export default App;

import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/catdog_logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {

    const [menu, setMenu] = useState ("shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    
    <header>
            <nav className="navbar">
            <div className="nav-logo">
                <Link style={{textDecoration: 'none'}} to='/'><img src={logo} alt="" /></Link>
                <Link style={{textDecoration: 'none'}} to='/'><p>Barks & Meows Paradise</p></Link>
            </div>
            <ul className="ms-auto nav-menu">
                <li className="nav-link" onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>HOME</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li className="nav-link" onClick={()=>{setMenu("dogs")}}><Link style={{textDecoration: 'none'}} to='/dogs'>DOG</Link>{menu==="dogs"?<hr/>:<></>}</li>
                <li className="nav-link" onClick={()=>{setMenu("cats")}}><Link style={{textDecoration: 'none'}} to='/cats'>CAT</Link>{menu==="cats"?<hr/>:<></>}</li>
                <div className="nav-login-cart">
                <Link to='/login'><button class="nav-link">Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" className='cartmenu nav-link'/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            </ul>
               <div class="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
               </div>
            </nav>
            </header>
    
  )
  
}


        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        window.onload=function(){
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
        })
      };
        document.querySelectorAll(".nav-link").forEach(n => n. 
        addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        })
        )






export default Navbar
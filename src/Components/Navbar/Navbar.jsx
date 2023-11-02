import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/catdog_logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from 'react'


const Navbar = () => {

    const [menu, setMenu] = useState ("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    
    const navRef = useRef();

	  const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
    }

  return (
    
    <header>
			<div className="nav-logo">
        <Link style={{textDecoration: 'none'}} to='/'><img src={logo} alt="" /></Link>
        <Link style={{textDecoration: 'none'}} to='/'><p>Barks & Meows Paradise</p></Link>
      </div>
			<nav ref={navRef}>
      <div className='rightnav'>
          
          <li class="nav-link" onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>HOME</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li class="nav-link" onClick={()=>{setMenu("dogs")}}><Link style={{textDecoration: 'none'}} to='/dogs'>DOG</Link>{menu==="dogs"?<hr/>:<></>}</li>
          <li class="nav-link" onClick={()=>{setMenu("cats")}}><Link style={{textDecoration: 'none'}} to='/cats'>CAT</Link>{menu==="cats"?<hr/>:<></>}</li>
            <div className="nav-login-cart">
                <Link to='/login'><button class="nav-link">Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" className='cartmenu nav-link'/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
    
  )
  
}






export default Navbar
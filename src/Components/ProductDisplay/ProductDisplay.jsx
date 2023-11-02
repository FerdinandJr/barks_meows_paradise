import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

//Product display Function
const ProductDisplay = (props) => {

    //props is equal to the product
    const {product} = props;
    const {addToCart} = useContext(ShopContext)

//display this
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="" />
            </div>
        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">₱{product.old_price}</div>
                <div className="productdisplay-right-price-new">₱{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                {product.ingredients}
            </div>
            <div className="productdisplay-right-size">
                <h1>Sizes Available:</h1>
                <div className="productdisplay-right-sizes">
                    <span>{product.size}</span>
                </div>
            </div>
            
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> 
            <p className='productdisplay-right-category'><span>Category : </span>{product.category}</p>
            <p className='productdisplay-right-category'><span>Tags : </span>{product.category}, {product.tags}</p>
        </div>
    </div>
    
  )
}

export default ProductDisplay
import React from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react'
import remove_icon from '../Assets/minus.png'
import arrow_icon from '../Assets/plus.png'


const CartItems = () => {
    //to get the functions in the context API
    const {getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart} = useContext(ShopContext)
  return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Description</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>

        </div>
        <hr />
        {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div>
                                <div className="cartitems-format cartitems-format-main">
                                    <img src={e.image} alt="" className='carticon-product-icon'/>
                                    <p>{e.name}</p>
                                    <p>₱{e.new_price}</p>
                                    <div className='cartitems-remove-icon-container'>
                                        <img className='cartitems-quantity' src={arrow_icon} onClick={() => {addToCart(e.id)}} alt="" />
                                        <button className='cartitems-quantity-btn'>{cartItems[e.id]}</button>
                                        <img className='cartitems-quantity'src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                                    </div>
                                    <p>₱{e.new_price*cartItems[e.id]}</p>
                                      
                                </div>
                                <hr />
                            </div>  
                }
                return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Order Total: </h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>₱{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>₱{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems